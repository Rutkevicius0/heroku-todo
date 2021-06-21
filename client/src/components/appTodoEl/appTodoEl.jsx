import React, { Component } from 'react';
import './style.css';

class AppTodoEl extends Component {
  // padaryti kad ikonele butu priklausoma nuo isDone savybes
  // fa-check-circle - done  fa-circle-thin - kai ne done

  // paspaudus pirma icona bublinam eventa iki app.jsx ir ten vygdom handleCheckUncheck
  state = {
    editTitle: this.props.singleTodo.title,
  };

  handleChange = (event) => {
    this.setState({ editTitle: event.target.value });
  };

  render() {
    const { _id, title, isDone, isEditOn } = this.props.singleTodo;
    // console.log(this.props.singleTodo);

    const spanOrTodo = isEditOn ? (
      <input
        type="text"
        value={this.state.editTitle}
        onChange={this.handleChange}
      />
    ) : (
      <span className={isDone ? 'doneTitle' : ''}>{title}</span>
    );

    return (
      <li className="app-todo-el">
        {!isEditOn && (
          <i
            onClick={() => this.props.onDoneUndone(_id)}
            className={this.setCheckClasses(isDone)}
          ></i>
        )}

        {spanOrTodo}
        {isDone ? (
          ''
        ) : (
          <i
            onClick={() => this.props.onEdit(_id, this.state.editTitle)}
            className="fa fa-pencil"
          ></i>
        )}

        <i onClick={() => this.props.onDelete(_id)} className="fa fa-trash"></i>
      </li>
    );
  }

  setCheckClasses(isDone) {
    let checkClasses = 'fa fa-circle-thin';
    if (isDone) checkClasses = 'fa fa-check-circle';
    return checkClasses;
  }
}

export default AppTodoEl;
