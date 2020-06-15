import React, {Component} from 'react';
import Ninjas from './Ninjas';
import Practice from './Practice';

function App() {
  return (
    <div className="App">
      <h1>My first React app!</h1>
      <p>Welcome!</p>
      <Ninjas name="Ryu" age="23" belt="black" />
      <Ninjas name="Yu" age="40" belt="yellow" />
      <Practice />
    </div>
  );
}

export default App;
