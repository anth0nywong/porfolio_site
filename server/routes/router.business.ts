/* File name: Assignment2
Student Name : Hok Hei Wong
StudentID : 301193519
Date: June 20, 2022*/
import express from 'express';
const router = express.Router();

import { AuthGuard } from '../util';

import {DisplayBusinessContact, DeleteRecord, DisplayUpdatePage, ProcessUpdatePage} from '../controllers/controller.business';

//Router contact page with another view.
router.get('/business-contact', AuthGuard, DisplayBusinessContact);
//Router update page.
router.get('/update/(:id)', AuthGuard, DisplayUpdatePage);
//Router to submit update form.
router.post('/update/(:id)', AuthGuard, ProcessUpdatePage);
//Router to delete function.
router.get('/delete/(:id)', AuthGuard, DeleteRecord);

export default router;