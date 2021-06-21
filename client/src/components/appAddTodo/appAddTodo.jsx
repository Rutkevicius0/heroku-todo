import React, { Component } from 'react';

import './appAddTodo.css';

class AppAddTodo extends Component {
  state = {
    newTodo: '',
  };

  handleChange = (event) => {
    // console.log(event.target.value);

    this.setState({ newTodo: event.target.value });
  };

  sendAddTodo = () => {
    console.log('sendAddTodo');
    this.props.onAddTodo(this.state.newTodo);
    this.setState({ newTodo: '' });
  };
  handleEnter = (e) => {
    if (e.keyCode === 13) {
      this.sendAddTodo();
    }
  };
  render() {
    return (
      <div className="add-todo-container">
        <i onClick={this.sendAddTodo} className="fa fa-plus-circle"></i>
        <input
          className={
            this.props.errors ? 'is-invalid add-todo-input' : 'add-todo-input'
          }
          onKeyUp={this.handleEnter}
          onChange={this.handleChange}
          value={this.state.newTodo}
          type="text"
          placeholder={
            this.props.errors ? 'Please fill the blank' : 'Add new Todo'
          }
        />
      </div>
    );
  }
}

export default AppAddTodo;
