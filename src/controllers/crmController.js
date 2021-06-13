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

//Get all contacts in db
export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

//Get contact by ID
export const getContactByID = (req, res) => {
    Contact.findById(req.params.contactID, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

//Update contact ID
export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({_id:req.params.contactID}, req.body, {new: true, useFindAndModify: false }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

//Delete contact ID
export const deleteContact = (req, res) => {
    Contact.remove({_id: req.params.contactID}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Successfully deleted contact'});
    });
}