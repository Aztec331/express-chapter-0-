const mongoose = require("mongoose");

//function only for connecting database
const connectDB = async () =>{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected ✅");

};

module.exports = connectDB;
