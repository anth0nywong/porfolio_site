import express from 'express';
const router = express.Router();

import { AuthGuard } from '../util';

import {DisplayMovieList} from '../controllers/controller.movie';

//Router contact page with another view.
router.get('/movie-list', AuthGuard, DisplayMovieList);

export default router;