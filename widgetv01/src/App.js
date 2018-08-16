import React, { Component } from 'react';
import ReactiveElements from 'reactive-elements';

class App extends Component {
  render() {
    return (
      <div >
        <h1> Hello Component</h1>
      </div>
    );
  }
}

export default App;

document.registerReact('my-sample', App);
