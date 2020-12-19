const router = require('express').Router();
const Todo = require('../model/Todo');

//Routes Will be Here
router.get('/', async (req, res) => {
    const allTodo = await Todo.find();
    res.render("index", { todo: allTodo });
})




module.exports = router;