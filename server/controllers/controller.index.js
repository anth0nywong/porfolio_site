"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactPage = exports.DisplayServicesPage = exports.DisplayProjectPage6 = exports.DisplayProjectPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
const util_1 = require("../util");
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'onePage', displayName: (0, util_1.UserDisplayName)(req) });
}
exports.DisplayHomePage = DisplayHomePage;
;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About Me', page: 'about', displayName: (0, util_1.UserDisplayName)(req) });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayProjectPage(req, res, next) {
    res.render('index', { title: 'My projects', page: 'projects', displayName: (0, util_1.UserDisplayName)(req) });
}
exports.DisplayProjectPage = DisplayProjectPage;
function DisplayProjectPage6(req, res, next) {
    res.render('index', { title: 'My projects', page: 'project6', displayName: (0, util_1.UserDisplayName)(req) });
}
exports.DisplayProjectPage6 = DisplayProjectPage6;
function DisplayServicesPage(req, res, next) {
    res.render('index', { title: 'My Services', page: 'services', displayName: (0, util_1.UserDisplayName)(req) });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayContactPage(req, res, next) {
    res.render('index', { title: 'Contact Me', page: 'contact', displayName: (0, util_1.UserDisplayName)(req) });
}
exports.DisplayContactPage = DisplayContactPage;
//# sourceMappingURL=controller.index.js.map