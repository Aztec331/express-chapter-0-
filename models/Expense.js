const mongoose = require("mongoose");

// Schema/Blueprint/Structure
const expenseSchema = new mongoose.Schema({
    title: String,
    amount: Number
});

// Model name - Expense
module.exports = mongoose.model("Expense", expenseSchema);
