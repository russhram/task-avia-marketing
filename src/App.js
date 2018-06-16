import React, { Component } from 'react';

import {fetchUser} from "./actions";
import './App.css';

class App extends Component {
  componentWillMount() {
    fetchUser.dispatch(2);
  }

  render() {
    return (
      <div>TEST</div>
    );
  }
}

export default App;
