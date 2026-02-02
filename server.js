const express = require("express");

const app = express();

const PORT = 5000;

//middleware to read JSON body
//middleware only handles requests
app.use(express.json());


//Get routes

app.get('/', (req, res) =>{
    res.send("Home biatch!")
});

app.get('/about', (req,res) =>{
    res.send("About biatch!")

});

app.get("/contact", (req, res) => {
    res.send("Contact biatch!");
})

//Post routes

app.post('/test', (req,res) =>{
    
    console.log(req.body);

    //res.json always handles response from the server
    res.json({mesage: "POST RECIEVED", data:req.body})
    
});











///////////////////////////////////////////////////////////////////
app.listen(PORT, ()=> {

    console.log("Server running at http://localhost:5000");
});
