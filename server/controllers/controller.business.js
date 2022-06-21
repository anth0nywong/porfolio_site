"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessUpdatePage = exports.DeleteRecord = exports.DisplayUpdatePage = exports.DisplayBusinessContact = void 0;
const business_1 = __importDefault(require("../models/business"));
const util_1 = require("../util");
function DisplayBusinessContact(req, res, next) {
    business_1.default.find(function (err, businessCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Business Contact List', page: "business-contact", messages: req.flash('businessMessages'),
            business: businessCollection, displayName: (0, util_1.UserDisplayName)(req) });
    }).sort({ contactName: 1 });
    ;
}
exports.DisplayBusinessContact = DisplayBusinessContact;
;
function DisplayUpdatePage(req, res, next) {
    business_1.default.findOne({ _id: req.params.id }, function (err, businessCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Update', page: 'update', business: businessCollection, id: req.params._id, displayName: (0, util_1.UserDisplayName)(req) });
    });
}
exports.DisplayUpdatePage = DisplayUpdatePage;
function DeleteRecord(req, res, next) {
    business_1.default.findByIdAndRemove(req.params.id, (err, businessCollection) => {
        if (!err) {
            req.flash('businessMessages', 'Record Deleted!');
        }
        else {
            console.log('Failed to Delete: ' + err);
        }
        res.redirect('/business-contact');
    });
}
exports.DeleteRecord = DeleteRecord;
function ProcessUpdatePage(req, res, next) {
    business_1.default.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
    });
    req.flash('businessMessages', 'Record Updated!');
    res.redirect('/business-contact');
}
exports.ProcessUpdatePage = ProcessUpdatePage;
;
//# sourceMappingURL=controller.business.js.map