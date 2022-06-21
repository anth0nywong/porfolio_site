// File name: Assignment2
// Student Name : Hok Hei Wong
// StudentID : 301193519
// Date: June 20, 2022

import express from 'express';
import BusinessModel from '../models/business';
import { UserDisplayName } from '../util';

// Function for Display Business Contact Page and data from MongoDB
export function DisplayBusinessContact(req : express.Request, res: express.Response, next: express.NextFunction) 
{
    BusinessModel.find(function(err, businessCollection)
    {
    if(err)
    {
        console.error(err);
        res.end(err);
    }
    res.render('index', {title: 'Business Contact List', page: "business-contact", messages: req.flash('businessMessages'), 
    business: businessCollection, displayName: UserDisplayName(req)});
    }).sort( { contactName: 1 } ); //sort by name
    ;
};
// Function for Update View and passing data Of record inside the form for update
export function DisplayUpdatePage(req : express.Request, res: express.Response, next: express.NextFunction)
{
    // Find in the database with id
    BusinessModel.findOne(
        {_id: req.params.id}, function(err, businessCollection)
    {
    if(err)
    {
        console.error(err);
        res.end(err);
    }
    res.render('index', { title: 'Update', page: 'update', business: businessCollection, id:req.params._id, displayName: UserDisplayName(req)});
    }   
    )
}
// Function to Remove a Document/Record from MongoDB and Redirect user to Business Contact Page
export function DeleteRecord(req : express.Request, res: express.Response, next: express.NextFunction)
{
     // Find in the database with id, and then remove document
    BusinessModel.findByIdAndRemove(
        req.params.id, (err, businessCollection) => {
            if (!err) {
                req.flash('businessMessages', 'Record Deleted!'); //display message
                
            } else {
                console.log('Failed to Delete: ' + err);
            }
            res.redirect('/business-contact');
        });

}
// Function to update the database and redirect to business contact page
export function ProcessUpdatePage(req : express.Request, res: express.Response, next: express.NextFunction) 
{
     // Find in the database with id and update
    BusinessModel.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (err) 
        {
            console.error(err);
            res.end(err);
        } 
      });
      req.flash('businessMessages', 'Record Updated!'); //display message
    res.redirect('/business-contact');
};