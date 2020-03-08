require('dotenv/config');
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

mongoose.connect(process.env.MONGO_URL, {
    useCreateIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(process.env.PORT, () => {
    console.log(`Servidor Executando! ... http://localhost:${process.env.PORT}`);
});