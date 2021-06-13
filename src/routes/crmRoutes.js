//Creating routes for specific endpoints to test in Postman
/*
    Routes Function
    Takes an app as an argument
*/
const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            //Middleware
            console.log(`Request from ${req.originalUrl}`)
            console.log(`Request type ${req.method}`)
            next();
        }, (req, res, next) => {
            res.send('GET request in contact route was successfull')
        })

        .post((req, res) =>
        res.send('POST request in contact route was successfull')
    );

    app.route('/contact/:contactID')
        .put((req, res) =>
            res.send('PUT request in contactID route was successfull!')
        )
        .delete((req, res) =>
            res.send('DELETE request in contactID route was successfull!')
    );
}

export default routes;  //exports function we'll use in index