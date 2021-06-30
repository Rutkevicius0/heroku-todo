require('dotenv').config();

const express = require('express');

const app = express();

const path = require('path');

const cors = require('cors');

const mongoose = require('mongoose');

app.use(cors({
  origin: 'https://todo-mern-or.herokuapp.com/api/todos'
}));
//midlleware - to get req.body in json
app.use(express.json());

const todoApi = require('./api/todoApi');

app.use('/', todoApi);

const rootBuild = path.join(__dirname, 'client', 'build');

// pasitikrinti ar musu aplinka yra production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(rootBuild));

  app.get('*', (req, res) => {
    res.sendFile(path.join('index.html', { root: rootBuild }));
  });
}
const PORT = process.env.PORT || 3002;
mongoose
  .connect(
    'mongodb+srv://Rutkevicius0:bmw535i@frankfurtaws.8fcpt.mongodb.net/ReactDB?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then((result) => {
    app.listen(PORT, console.log('backend online'));
  })
  .catch((err) => console.error(err.message));
