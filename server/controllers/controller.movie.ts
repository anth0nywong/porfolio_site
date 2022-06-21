// File name: Assignment2
// Student Name : Hok Hei Wong
// StudentID : 301193519
// Date: June 20, 2022import express from 'express';


import express from 'express';
import {Model} from '../models/movie';
import { UserDisplayName } from '../util';
// Display Movie List and passing movie collection as an array
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