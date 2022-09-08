"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_contact_js_1 = require("../controllers/controller.contact.js");
const router = express_1.default.Router();
const controller_index_js_1 = require("../controllers/controller.index.js");
router.get('/', controller_index_js_1.DisplayHomePage);
router.get('/home', controller_index_js_1.DisplayHomePage);
router.get('/about', controller_index_js_1.DisplayAboutPage);
router.get('/projects', controller_index_js_1.DisplayProjectPage);
router.get('/project6', controller_index_js_1.DisplayProjectPage6);
router.get('/services', controller_index_js_1.DisplayServicesPage);
router.get('/contact', controller_index_js_1.DisplayContactPage);
router.post('/contact', controller_contact_js_1.ProcessContact);
exports.default = router;
//# sourceMappingURL=router.index.js.map