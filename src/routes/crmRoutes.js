//Creating routes for specific endpoints to test in Postman
/*
    Routes Function
    Takes an app as an argument
*/
import { addNewContact,
getContacts,
getContactByID,
updateContact,
deleteContact
 } from '../controllers/crmController';


const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            //Middleware
            console.log(`Request from ${req.originalUrl}`)
            console.log(`Request type ${req.method}`)
            next();
        }, (req, res, next) => {
            res.send('GET request in contact route was successfull')
            //Get all contacts
            getContacts
        })

        .post(addNewContact);

    app.route('/contact/:contactID')
        //Gets specific contact
        .get(getContactByID)
        //updates specific contact
        .put( updateContact)
        //deletes specific contact
        .delete(deleteContact);
}

export default routes;  //exports function we'll use in index