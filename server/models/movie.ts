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
