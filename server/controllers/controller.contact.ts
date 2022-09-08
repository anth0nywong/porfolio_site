import express from 'express';
import { CallbackError } from 'mongoose';
import ContactModel from '../models/contact';

export function ProcessContact(req : express.Request, res: express.Response, next: express.NextFunction) 
{
    console.log(req.body.approve);
    let contact = new ContactModel({
        "firstName": req.body.firstname,
        "lastNumber": req.body.lastname,
        "tel": req.body.areacode + req.body.telnum,
        "email": req.body.email,
        "contactAllowed": req.body.approve,
        "choose": req.body.choose,
        "message": req.body.feedback
    })
    ContactModel.create(contact, function(err: CallbackError)
    {
      if(err)
      {
        console.error(err);
        res.end(err);
      }
    return res.redirect('/home');
    });
}