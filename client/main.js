import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from '../imports/views/App.jsx';
import '../imports/config/accounts-config.js';

Meteor.startup(() => {
  render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('render-target'));
});
