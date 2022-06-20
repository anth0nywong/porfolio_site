import express from 'express';
import passport from 'passport';

import User from '../models/user';

import { UserDisplayName } from '../util';

export function DisplayLoginPage(req : express.Request, res: express.Response, next: express.NextFunction) 
{
   if(!req.user)
    {
        res.render('index', {title: 'Login', page:'login', messages: req.flash('loginMessages'), displayName: UserDisplayName(req)});
    }
    return res.redirect('/movie-list');
};
export function DisplayRegisterPage(req : express.Request, res: express.Response, next: express.NextFunction) 
{
    if(!req.user)
    {
        res.render('index', {title: 'Register', page:'register', messages: req.flash('registerMessages'), displayName: UserDisplayName(req)});
    }
    return res.redirect('/movie-list');
};

export function ProcessLoginPage(req : express.Request, res: express.Response, next: express.NextFunction) 
{
    
    passport.authenticate('local', function(err, user, info)
    {
        // are there server error?
        if (err)
        {
            console.error(err);
            res.end(err);
        }

        // are there login errors?
        if (!user) //no user
        {
            req.flash('loginMessages', 'Authentication Error!');
            return res.redirect('/login');
        }

        req.logIn(user, function(err)
        {
            if(err)
            {
                console.error(err);
                res.end(err);
            }
            return res.redirect('/movie-list');
        });
    })(req, res, next); //Self-calling function
};
export function ProcessRegisterPage(req : express.Request, res: express.Response, next: express.NextFunction) 
{
    // instantiate a new user object
    let newUser = new User({
        username:req.body.username,
        EmailAddress: req.body.emailAddress,
        DisplayName: req.body.firstName + " " + req.body.lastName
    });
    
    User.register(newUser, req.body.password, function(err) //register function will encrypt password
    {
        if(err)
        {
            if (err.name == "UserExistsError")
            {
                console.error('Error! User Already Exist!');
                req.flash('registerMessages', 'Registration Error!');
            }
            else
            {
                console.error(err);
                req.flash('registerMessages', 'Server Error');
            }
            res.redirect('/register');
        };

        //automatically login the user and go to movie-list page
        return passport.authenticate('local')(req, res, function()
        {
            res.redirect('/movie-list');
        });
    }) 
    
};
export function ProcessLogoutPage(req : express.Request, res: express.Response, next: express.NextFunction) 
{
    req.logOut(function(err)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
    });
    res.redirect('/login');
};