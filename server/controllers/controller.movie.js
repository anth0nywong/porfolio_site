"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayMovieList = void 0;
const movie_1 = require("../models/movie");
const util_1 = require("../util");
function DisplayMovieList(req, res, next) {
    movie_1.Model.find(function (err, moviesCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Movie List', page: "movie-list", movies: moviesCollection, displayName: (0, util_1.UserDisplayName)(req) });
    });
}
exports.DisplayMovieList = DisplayMovieList;
;
//# sourceMappingURL=controller.movie.js.map