const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

// MongoDB (não-relacional)

mongoose.connect('mongodb+srv://semana-omnistack:semana-omnistack123@cluster0-rndfj.mongodb.net/week10?retryWrites=true&w=majority', {
    useCreateIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);