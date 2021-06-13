import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';


const app = express();
const PORT = 4000;  //Port for the server
routes(app);

//Connection between mongo and API
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Creates bodyParser connection
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));

//When someone sends a get() request
app.get('/', (req, res) =>
    res.send(`Node and express server running on port: ${PORT}`)
);

//Listen on port
app.listen(PORT, () => 
    console.log(`Your server is running on port: ${PORT}`)
);

