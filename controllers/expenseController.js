const Expense = require("../models/Expense");

//CREATE EXPENSE
const addExpense = async (req,res) => {

    const expense = await Expense.create(req.body);

    res.json(expense);

}


//Get all expenses
const getExpenses = async (req, res) =>{

    const expenses = await Expense.find();

    res.json(expenses);

};

//EXPORTS (always at the bottom)
module.exports = {
    addExpense,
    getExpenses
}