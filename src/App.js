import React, { Component } from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
//import {v4 as uuidv4 } from "uuid";
import axios from 'axios';

import './App.css';

//* Main Component: Render() is lifecycle method. And Return JSX. With <Todos /> Embed a comp. into main app comp.
class App extends Component {
  state = {
    todos: [
      /*{
        id: uuidv4.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuidv4.v4(),
        title: 'Dinner with family',
        completed: true
      },
      {
        id: uuidv4.v4(),
        title: 'Meeting with boss',
        completed: false
      }*/
    ]
  }

// JSON placeholder:
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data}))
  }

// Toggle Complete:
markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
}

// Delete Todo: -I want to use an arrow should give the ID
delTodo = id => {
  /*this.setState({ todos: [...this.state.todos.filter(todo => todo.is !== id)] });*/
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({
    todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  );
};

// Add Todo: -Make a copy so use the spread operator
addTodo = (title) => {
 /* const newTodo = {
    id: uuidv4.v4(),
    title, //* title: title so we can write like this
    completed: false
  }*/
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title,
    completed: false
  })
    .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  /*this.setState({ todos: [...this.state.todos, newTodo] })*/
}

render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )}></Route>
            <Route path="/about" component={About}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
