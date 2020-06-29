import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'name';

    return (
      <div className="App">
        <h1>Hello React {name.toLowerCase()}</h1>
        <h2>Learning</h2>
      </div>
    );
  }
}

export default App;
