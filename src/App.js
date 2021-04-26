import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Counter from './sub-components/Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Counter></Counter>
      </div>
    );
  }
}

export default App;
