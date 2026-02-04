const Expense = require("../models/Expense");

//CREATE EXPENSE
const addExpense = async (req,res) => {

    const { title, amount} = req.body;

    // simple validation
    if(!title || !amount){
        return res.json(400).json( {message: "Title and amount required"} );
    }

    const expense = await Expense.create( {title,amount} );

    res.json(expense);

}

//Get all expenses
const getExpenses = async (req, res) =>{

    try{
    const expenses = await Expense.find();
    res.json(expenses);
    }

    catch(error){
        res.status(500).json({ message: error.message});
    }

};

//DELETE expense
const deleteExpense = async (req, res) =>{

    try{
        const id = req.params.id;

        const expense = await Expense.findByIdAndDelete(id);

        if(!expense){
            return res.status(404).json( {message:"Expense not found"} );
        }

        res.json( {message: "Expense deleted successfully",
                   expense_id: id});

    }
    catch(error){
        res.json(500).json( {message: error.message})
    }

}



//EXPORTS (always at the bottom)
module.exports = {
    addExpense,
    getExpenses,
    deleteExpense
}