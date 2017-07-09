import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Todos from '../collections/Todos.js';
import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';
import Accounts from './Accounts.jsx';


class TodoPage extends Component {
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
  // get current user
  let _currentUsername = Meteor.user() ? Meteor.user().username : null;

  // map todos, currentUser, etc. to props
  return {
    todos: Todos.find({username: _currentUsername}).fetch(),
    currentUser: _currentUsername
  };
}, TodoPage);
