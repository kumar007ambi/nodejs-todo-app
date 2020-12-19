const router = require('express').Router();
const Todo = require('../model/Todo');


//Routes
router.post('/add/todo', (req, res, next) => {
    const { todo } = req.body;//destuctruing
    const newTodo = new Todo({ todo })
    //save
    newTodo.save()
        .then(() => {
            console.log("Successfully Added Todo");
            res.redirect('/')
        })
        .catch(err => {
            console.log(err);
        })
})
    .get('/delete/todo/:_id', (req, res) => {
        const { _id } = req.params;
        Todo.deleteOne({ _id })
            .then(() => {
                console.log("Deleted Todo Successfully");
                res.redirect('/')
            })
            .catch(err => {
                console.log(err)
            })
    })


module.exports = router;