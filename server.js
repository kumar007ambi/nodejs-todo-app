const express = require('express');
const mongoose = require('mongoose');


const app = express();

//constant for database for creating connection with datbase
const db = 'mongodb+srv://nodeapi:nodeapi@todonode.n8gfl.mongodb.net/NodeTodo?retryWrites=true&w=majority';

mongoose.connect(db, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log('Connected to MongoDB Database...'))
    .catch(err => console.log('Database Connection Error...' + err))

//middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"));
app.set('view engine', "ejs");

//routes
app.use(require('./routes/index'));
app.use(require('./routes/todo'));


//Server Config
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const port = process.env.PORT || 6500;


app.listen(port, () => {
    console.log('Server is started on Port ' + port)
})
