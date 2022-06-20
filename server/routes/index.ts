import express from 'express';
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

export default router;