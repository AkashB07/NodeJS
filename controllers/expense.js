const User = require('../models/expense')

const addExpense = async (req, res , next)=> {
    try
    {
      const amount = req.body.amount;
      const description = req.body.description;
      const category = req.body.category;
  
      const data = await User.create({amount: amount, description: description, category: category});
      res.status(201).json({newExpenseDetail: data});
    }
    catch(err){
      res.status(500).json({
        error: err
      })
    }
  }

  const getExpense = async (req, res, next)=> {
    try{
      const expenses = await User.findAll();
      res.status(200).json({allExpenses: expenses});
    }catch(error){
      console.log('Get expense is faling', JSON.stringify(error));
      res.status(500).json({error: error})
    }
    
  }

  const deleteExpense = async (req, res)=> {
    try{
      if(req.params.id == 'undefined'){
        console.log('ID is missing');
        return res.status(400).json({err: 'ID is missing'})
      }
      const uId = req.params.id;
      await User.destroy({where: {id: uId}});
      res.sendStatus(200);
    }catch(error){
      console.log(error);
      res.status(500).json({error: error})
    }
  }

  module.exports ={
    addExpense,
    getExpense,
    deleteExpense
  }