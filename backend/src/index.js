const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// MongoDB (não-relacional)

mongoose.connect('mongodb+srv://semana-omnistack:semana-omnistack123@cluster0-rndfj.mongodb.net/week10?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);