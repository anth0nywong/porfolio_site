// File name: Assignment2
// Student Name : Hok Hei Wong
// StudentID : 301193519
// Date: June 20, 2022

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BusinessSchema = new Schema
(
    {
        contactName: String,
        contactNumber: String,
        emailAddress: String,

    },
    {
        collection: "business"
    }
)
// Create Model with Schema
const Model = mongoose.model("Business", BusinessSchema);
// Export Model for business collection
export default Model;
