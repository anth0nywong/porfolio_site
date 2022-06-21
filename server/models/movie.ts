// File name: Assignment2
// Student Name : Hok Hei Wong
// StudentID : 301193519
// Date: June 20, 2022
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MovieSchema = new Schema
(
    {
        Name: String,
        Year: String,
        Director: String,
        Rating: String

    },
    {
        collection: "movies"
    }
)

export const Model = mongoose.model("Movies", MovieSchema);
