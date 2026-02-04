const express = require("express");

const router = express.Router();

const {
    addExpense,
    getExpenses,
    deleteExpense,
    updateExpense
} = require("../controllers/expenseController");

const validateExpense = require("../middleware/validateExpense")

//map URL to controller
router.post('/',validateExpense, addExpense);
router.put('/:id',validateExpense,updateExpense );

router.get('/', getExpenses);
router.delete('/:id', deleteExpense);


module.exports = router;