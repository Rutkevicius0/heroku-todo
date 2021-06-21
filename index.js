require('dotenv').config();

const express = require('express');

const app = express();

const cors = require('cors');

const mongoose = require('mongoose');

const PORT = process.env.PORT || 3002;

app.use(cors());
//midlleware - to get req.body in json
app.use(express.json());

const todoApi = require('./api/todoApi');

app.use('/', todoApi);

mongoose
  .connect(process.env.MONGO_CONN_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(PORT, console.log('backend online'));
  })
  .catch((err) => console.error(err.message));
