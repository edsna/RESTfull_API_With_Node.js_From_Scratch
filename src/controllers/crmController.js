import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

//Creates new contact constructor
const Contact = mongoose.model('Contact', ContactSchema);

//Add new contact fun
export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);
    newContact.save((err, contact) => {
        if (err) {
            console.log(Contact);
            res.send(err);
        }
        res.json(contact);
    });
}

export const getContact = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            console.log(Contact);
            res.send(err);
        }
        res.json(contact);
    });
}