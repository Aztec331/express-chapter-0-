const express = require("express");

const app = express();

//middleware to read JSON body
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


//post route 1
app.post('/test', (req,res) =>{


    console.log(req.body);

    res.send("POST recieved ho gayi bsdk")
});












///////////////////////////////////////////////////////////////////
app.listen(5000, ()=> {

    console.log("Server running at http://localhost:5000");
});
