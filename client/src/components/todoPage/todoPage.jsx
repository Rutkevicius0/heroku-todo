import React, { Component } from 'react';

import AppHeader from '../appHeader/appHeader';
import AppList from '../appList/appList';
import AppAddTodo from '../appAddTodo/appAddTodo';
import GetSendData from '../../service/getSendData';

import './todoPage.css';

class TodoPage extends Component {
  state = {
    todos: [],
    // todoTitle: '',
    errors: {
      addTodo: '',
    },
  };

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    GetSendData.getAll((data) =>
      this.setState({ todos: data.sort((a, b) => a.isDone - b.isDone) }),
    );
  };

  handleEdit = (editId, newTitleVal) => {
    const found = this.state.todos.find((t) => t._id === editId);
    let updated = {};
    if (found.isEditOn === false) {
      updated = { isEditOn: true };
      GetSendData.updateOne(editId, updated, this.getTodos);
    }
    if (found.isEditOn === true) {
      updated = { isEditOn: false, title: newTitleVal };
      GetSendData.updateOne(editId, updated, this.getTodos);
    }

    // found.isEditOn = !found.isEditOn;
  };

  handleDoneUndone = (idToCheckUncheck) => {
    const found = this.state.todos.find((t) => t._id === idToCheckUncheck);
    let updated = {};
    if (found.isDone === false) {
      updated = { isDone: true };
      GetSendData.updateOne(idToCheckUncheck, updated, this.getTodos);
    }
    if (found.isDone === true) {
      updated = { isDone: false };
      GetSendData.updateOne(idToCheckUncheck, updated, this.getTodos);
    }
    // paspaudus rutuliuka
    // console.log('done undone', idToCheckUncheck);

    // // pasidaryti todos kopija
    // const todos = [...this.state.todos];

    // // surasti todo kuris paspaude ir pakeisti jo busena
    // const found = todos.find((t) => t.id === idToCheckUncheck);

    // // pakeisti isDone
    // found.isDone = !found.isDone;
  };

  handleDelete = (idOfTodoThatWasPressed) => {
    console.log('delete pressed', idOfTodoThatWasPressed);
    GetSendData.deleteOne(idOfTodoThatWasPressed, this.getTodos);

    // filter todos to not include the one that was pressed delete on
    // const todosWithoutOne = this.state.todos.filter(
    //   (t) => t.id !== idOfTodoThatWasPressed,
    // );
    // this.setState({ todos: todosWithoutOne });
  };

  handleAddTodo = (todoTitle) => {
    this.setState({ errors: { addTodo: '' } });
    const newTodo = {
      title: todoTitle,
    };
    GetSendData.createOne(newTodo, (ats) => {
      if (!ats.success) {
        this.setState({ errors: { addTodo: 'field cannot be empty' } });
      }
      this.getTodos();
    });
    // console.log('add new todo', todoTitle);

    // // todos state copija
    // const todos = [...this.state.todos];
    // // sukuriam nauja todo obj (panaudojam currentTodoId)
    // const newTodo = {
    //   id: this.state.currentTodoId,
    //   isDone: false,
    //   title: todoTitle,
    //   isEditOn: false,
    // };
    // todos.unshift(newTodo);
    // this.setState({
    //   todos: todos,
    //   currentTodoId: this.state.currentTodoId + 1,
    // });
    // pridedam prie kopijos nauja todo obj

    // set State atnaujima, todos ir currentTodoId
  };

  render() {
    return (
      <div className="todo-page">
        <AppHeader />
        <AppList
          onEdit={this.handleEdit}
          onDelete={this.handleDelete}
          onDoneUndone={this.handleDoneUndone}
          todos={this.state.todos}
        />
        <AppAddTodo
          errors={this.state.errors.addTodo}
          onAddTodo={this.handleAddTodo}
        />
      </div>
    );
  }
}

export default TodoPage;

// pasidaryti FavoriteCompooenta
// tuscia zvaigzdute kai neijungta ir pilna kai ijungta
