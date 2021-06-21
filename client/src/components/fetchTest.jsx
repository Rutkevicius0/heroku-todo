import React, { Component } from 'react';
import GetSendData from '../service/getSendData';

class fetchTest extends Component {
  state = {
    todoTitle: '',
    todos: [],
  };
  syncTitle = (e) => {
    this.setState({
      todoTitle: e.target.value,
    });
  };
  componentDidMount() {
    this.getTodos();
  }
  getTodos = () => {
    GetSendData.getAll((data) => this.setState({ todos: data }));
  };
  handleNewTodo = () => {
    const newTodo = {
      title: this.state.todoTitle,
    };
    GetSendData.createOne(newTodo, this.getTodos);
  };
  render() {
    return (
      <div>
        <h1>Fetch</h1>
        <input
          onChange={this.syncTitle}
          value={this.state.todoTitle}
          type="text"
          placeholder="add new todo"
        />
        <button onClick={this.handleNewTodo}>Save New Todo</button>

        <ul className="list">
          {this.state.todos.map((t) => (
            <li className="list-item" key={t.id}>
              {t.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default fetchTest;
