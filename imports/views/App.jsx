import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Todos from '../collections/Todos.js';
import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';


class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList todos={this.props.todos}/>
      </div>
    );
  }
}

export default createContainer(() => {
  return {
    todos: Todos.find().fetch(),
  };
}, App);
