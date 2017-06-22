import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import Todos from '../collections/Todos.js';


class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {todoInputText: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    Todos.insert({text: this.state.todoInputText});
  }

  handleChange(event) {
    this.setState({todoInputText: event.target.value})
  }

  todoForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          New Todo:
          <input type="text" value={this.state.todoInputText} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }

  render() {
    return this.todoForm()
  }
}

export default AddTodo;
