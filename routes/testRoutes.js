const express = require("express");

//router is mini app
const router = express.Router();

//Get route 
router.get('/', (req,res) =>{
    res.send("Home from router 🚀");
});

//Post route
router.post('/test', (req,res) =>{
    
    res.json( { message: "POST works inside router"} );
});

module.exports = router;

