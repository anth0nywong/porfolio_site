import express from 'express';
import { Redirect } from 'react-router-dom';
import ContactModel from '../models/contact';

export function ProcessContact(req : express.Request, res: express.Response, next: express.NextFunction) 
{
    console.log("hi");
    let contact = new ContactModel({
        "firstName": req.body.firstname,
        "lastNumber": req.body.lastname,
        "tel": req.body.areacode + req.body.telnum,
        "email": req.body.email,
        "contactAllowed": req.body.approve,
        "choose": req.body.choose,
        "message": req.body.feedback
    })
    console.log(contact);
    return res.redirect("/home");
}