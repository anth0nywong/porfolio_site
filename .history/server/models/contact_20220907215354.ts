// File name: Assignment2
// Student Name : Hok Hei Wong
// StudentID : 301193519
// Date: June 20, 2022

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ContactSchema = new Schema
(
    {
        firstName: String,
        lastNumber: String,
        tel: String,
        email: String,
        contactAllowed: Boolean,
        choose: String,
        message: String
    },
    {
        collection: "contact"
    }
)
// Create Model with Schema
const Model = mongoose.model("Contact", ContactSchema);
// Export Model for business collection
export default Model;
