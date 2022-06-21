"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessLogoutPage = exports.ProcessRegisterPage = exports.ProcessLoginPage = exports.DisplayRegisterPage = exports.DisplayLoginPage = void 0;
const passport_1 = __importDefault(require("passport"));
const user_1 = __importDefault(require("../models/user"));
const util_1 = require("../util");
function DisplayLoginPage(req, res, next) {
    if (!req.user) {
        res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessages'), displayName: (0, util_1.UserDisplayName)(req) });
    }
    return res.redirect('/business-contact');
}
exports.DisplayLoginPage = DisplayLoginPage;
;
function DisplayRegisterPage(req, res, next) {
    if (!req.user) {
        res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessages'), displayName: (0, util_1.UserDisplayName)(req) });
    }
    return res.redirect('/business-contact');
}
exports.DisplayRegisterPage = DisplayRegisterPage;
;
function ProcessLoginPage(req, res, next) {
    passport_1.default.authenticate('local', function (err, user, info) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        if (!user) {
            req.flash('loginMessages', 'Authentication Error!');
            return res.redirect('/login');
        }
        req.logIn(user, function (err) {
            if (err) {
                console.error(err);
                res.end(err);
            }
            return res.redirect('/business-contact');
        });
    })(req, res, next);
}
exports.ProcessLoginPage = ProcessLoginPage;
;
function ProcessRegisterPage(req, res, next) {
    let newUser = new user_1.default({
        username: req.body.username,
        EmailAddress: req.body.emailAddress,
        DisplayName: req.body.firstName + " " + req.body.lastName
    });
    user_1.default.register(newUser, req.body.password, function (err) {
        if (err) {
            if (err.name == "UserExistsError") {
                console.error('Error! User Already Exist!');
                req.flash('registerMessages', 'Registration Error!');
            }
            else {
                console.error(err);
                req.flash('registerMessages', 'Server Error');
            }
            res.redirect('/register');
        }
        ;
        return passport_1.default.authenticate('local')(req, res, function () {
            res.redirect('/business-contact');
        });
    });
}
exports.ProcessRegisterPage = ProcessRegisterPage;
;
function ProcessLogoutPage(req, res, next) {
    req.logOut(function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
    });
    res.redirect('/login');
}
exports.ProcessLogoutPage = ProcessLogoutPage;
;
//# sourceMappingURL=controller.auth.js.map