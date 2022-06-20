"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const controller_auth_1 = require("../controllers/controller.auth");
router.get('/login', controller_auth_1.DisplayLoginPage);
router.get('/register', controller_auth_1.DisplayRegisterPage);
router.post('/login', controller_auth_1.ProcessLoginPage);
router.post('/register', controller_auth_1.ProcessRegisterPage);
router.get('/logout', controller_auth_1.ProcessLogoutPage);
exports.default = router;
//# sourceMappingURL=auth.js.map