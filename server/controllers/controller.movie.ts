import express from 'express';
import {Model} from '../models/movie';
import { UserDisplayName } from '../util';

export function DisplayMovieList(req : express.Request, res: express.Response, next: express.NextFunction) 
{
    Model.find(function(err, moviesCollection)
    {
    if(err)
    {
        console.error(err);
        res.end(err);
    }
    res.render('index', {title: 'Movie List', page: "movie-list", movies: moviesCollection, displayName: UserDisplayName(req)});
    });

};