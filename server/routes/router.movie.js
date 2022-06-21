"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const util_1 = require("../util");
const controller_movie_1 = require("../controllers/controller.movie");
router.get('/movie-list', util_1.AuthGuard, controller_movie_1.DisplayMovieList);
exports.default = router;
//# sourceMappingURL=router.movie.js.map