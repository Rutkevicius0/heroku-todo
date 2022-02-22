const express = require('express');

const router = express.Router();

const Todo = require('../models/todo');

router.get('/api/todos', (req, res) => {
  Todo.find()
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => res.status(500).json({ success: false, err }));
  //   res.json({ msg: 'all todos' });
});

router.post('/api/todos/new', (req, res) => {
  const newTodo = new Todo(req.body);

  newTodo
    .save()
    .then((result) => {
      res.json({ success: true, newTodo: result });
    })
    .catch((err) => res.status(400).json({ success: false, err }));
});

router.delete('/api/todos/delete/:id', async (req, res) => {
  // Todo.findByIdAndDelete(req.params.id)
  //   .then((result) => res.json({ msg: 'delete success' }))
  //   .catch((err) => );
  try {
    const result = await Todo.findByIdAndDelete(req.params.id);
    res.json({ success: true, deleted: result });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/api/todos/edit/:id', (req, res) => {
  console.log(req.params.id);
  Todo.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => res.json({ msg: 'update success', result }))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
