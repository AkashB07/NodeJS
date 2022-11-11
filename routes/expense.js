const express = require('express');

const router = express.Router();

const expensecontroller = require('../controllers/expense')

router.post('/add-expense', expensecontroller.addExpense);
  
router.get('/get-expense', expensecontroller.getExpense)
  
router.delete('/delete-expense/:id', expensecontroller.deleteExpense)

module.exports = router;