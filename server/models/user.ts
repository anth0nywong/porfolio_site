// File name: Assignment2
// Student Name : Hok Hei Wong
// StudentID : 301193519
// Date: June 20, 2022

// Step 1 -import Mongoose - Database adapter
import mongoose, { PassportLocalSchema} from 'mongoose';
const Schema = mongoose.Schema; //alias for mongoose.Schema
import passportLocalMongoose from 'passport-local-mongoose';
// Step 2 - Create a schema that matches the data in collection
const UserSchema = new Schema
({
    DisplayName: String,
    userName: String,
    EmailAddress: String,
    Created: 
    {
        type: Date,
        default: Date.now()
    },
    Updated:{
        type:Date,
        default: Date.now()
    }
},
{
    collection: "user"
});

declare global
{
    export type UserDocument = mongoose.Document &
    {
        username: String,
        EmailAddress: String,
        DisplayName: String
    }
}

// Step 3 - plugin the passport local strategy
UserSchema.plugin(passportLocalMongoose);

// Step 4 - Create a Model using the Schema
const Model = mongoose.model("User", UserSchema as PassportLocalSchema);

//const Model = mongoose.model("User", UserSchema) as PassportLocalModel;
// Step 5 - Export the Model -> converts this file into a module
export default Model;