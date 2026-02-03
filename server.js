const express = require("express");

const app = express();

const PORT = 5000;

//middleware to read JSON body
//converts string to javascript object so server can read
app.use(express.json());

//import routes
const testRoutes = require("./routes/testRoutes.js");


// use routes
app.use('/', testRoutes)





///////////////////////////////////////////////////////////////////
app.listen(PORT, ()=> {

    console.log("Server running at http://localhost:5000");
});
