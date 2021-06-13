/*
    Defines the schema for the db/collections
*/
import mongoose from "mongoose";

//creates schema oject
const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    email:{
        type: String
    },
    company:{
        type: String
    },
    phone:{
        type: Number
    },
    created_date:{
        type: Date,
        default: Date.now
    }

});

