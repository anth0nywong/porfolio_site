"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessContact = void 0;
const contact_1 = __importDefault(require("../models/contact"));
function ProcessContact(req, res, next) {
    console.log(req.body.approve);
    let contact = new contact_1.default({
        "firstName": req.body.firstname,
        "lastNumber": req.body.lastname,
        "tel": req.body.areacode + req.body.telnum,
        "email": req.body.email,
        "contactAllowed": req.body.approve,
        "choose": req.body.choose,
        "message": req.body.feedback
    });
    contact_1.default.create(contact, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        return res.redirect('/home');
    });
}
exports.ProcessContact = ProcessContact;
//# sourceMappingURL=controller.contact.js.map