"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const util_1 = require("../util");
const controller_business_1 = require("../controllers/controller.business");
router.get('/business-contact', util_1.AuthGuard, controller_business_1.DisplayBusinessContact);
router.get('/update/(:id)', util_1.AuthGuard, controller_business_1.DisplayUpdatePage);
router.post('/update/(:id)', util_1.AuthGuard, controller_business_1.ProcessUpdatePage);
router.get('/delete/(:id)', util_1.AuthGuard, controller_business_1.DeleteRecord);
exports.default = router;
//# sourceMappingURL=router.business.js.map