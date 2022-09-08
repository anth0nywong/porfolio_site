/* File name: Assignment2
Student Name : Hok Hei Wong
StudentID : 301193519
Date: June 20, 2022*/

import express from 'express';
import { ProcessContact } from '../controllers/controller.contact.js';
const router = express.Router();

import {DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayProjectPage, DisplayServicesPage} from '../controllers/controller.index.js';

/* GET home page but getting '/' */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET About Me page. */
router.get('/about', DisplayAboutPage);

/* GET Projects page. */
router.get('/projects', DisplayProjectPage);

/* GET Services page. */
router.get('/services', DisplayServicesPage);

//Router contact page with another view.
router.get('/contact', DisplayContactPage);

router.post('/contact', ProcessContact);

export default router;