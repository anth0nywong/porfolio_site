/* File name: Assignment2
Student Name : Hok Hei Wong
StudentID : 301193519
Date: June 20, 2022*/

import express from 'express';

const router = express.Router();

import {DisplayLoginPage, DisplayRegisterPage, ProcessLoginPage, ProcessLogoutPage, ProcessRegisterPage} from '../controllers/controller.auth';

//Router contact page with another view.
router.get('/login', DisplayLoginPage);

router.get('/register', DisplayRegisterPage);

router.post('/login', ProcessLoginPage);

router.post('/register', ProcessRegisterPage);

router.get('/logout', ProcessLogoutPage);

export default router;