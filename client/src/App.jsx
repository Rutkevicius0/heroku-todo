import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Navbar from './components/navbar/navbar';
import Home from './pages/home';
import TodoPage from './components/todoPage/todoPage';
import About from './pages/about';
import Contacts from './pages/contacts';

// app styles
import './app.css';
import SingleTodo from './pages/singleTodo';
import NotFound from './pages/404';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/todos/:id" component={SingleTodo}></Route>
            <Route path="/todos" component={TodoPage}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/todo" to="/todos"></Redirect>
            <Route path="/about" component={About}></Route>
            <Route path="/contacts" component={Contacts}></Route>
            <Route path="/" exact component={Home}></Route>
            <Redirect from="/" to="/todos"></Redirect>
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
