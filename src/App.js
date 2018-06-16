import React, { Component } from 'react';

import {fetchUser} from "./actions";
import store from './store';
import './App.css';

class App extends Component {
  componentWillMount() {
    store.dispatch(fetchUser(2));
  }

  render() {
    return (
      <div>TEST</div>
    );
  }
}

export default App;
