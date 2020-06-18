import React, {Component} from 'react';
import Ninjas from './Ninjas';
import Practice from './Practice';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'Black', id: 1 },
      { name: 'Mioki', age: 29, belt: 'Black', id: 2 },
      { name: 'Ayu', age: 13, belt: 'Yellow', id: 3 }
    ],
    items: [
      { name: 'Mountain Bike', buildYear: 2019, color: 'green', id: 1 },
      { name: 'Hybrid Bike', buildYear: 2020, color: 'black/yellow', id: 2 },
      { name: 'Cruiser Bike', buildYear: 2020, color: 'purple', id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first react app!</h1>
        <p>Welcome!</p>

        <Ninjas ninjas={this.state.ninjas} />
        <Practice items={this.state.items} />
        <AddNinja />
      </div>
    );
  }
}

export default App;
