import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import TodoList from './TodoList.jsx';
import TodoPage from './TodoPage.jsx';
import NavBar from './NavBar.jsx';
import Accounts from './Accounts.jsx';
import NavBarItems from '../config/navbar-config.js';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar items={NavBarItems}/>
        <Switch >
          <Route path='/login' component={Accounts} />
          <Route path='/' component={TodoPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
