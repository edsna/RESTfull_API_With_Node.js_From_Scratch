import express from 'express';
import routes from './src/routes/crmRoutes';


const app = express();
const PORT = 4000;  //Port for the server
routes(app);

//When someone sends a get() request
app.get('/', (req, res) =>
    res.send(`Node and express server running on port: ${PORT}`)
);

//Listen on port
app.listen(PORT, () => 
    console.log(`Your server is running on port: ${PORT}`)
);

