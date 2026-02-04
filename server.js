const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
require("dotenv").config();

const connectDB = require("./config/db");

//middleware to read JSON body
//converts string to javascript object so server can read
app.use(express.json());

//Allow any frontend port to connect
app.use(cors())

connectDB();

const expenseRoutes = require("./routes/expenseRoutes");

app.use('/expenses', expenseRoutes);



















///////////////////////////////////////////////////////////////////
app.listen(PORT, ()=> {

    console.log("Server running at http://localhost:5000");
});
