import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';

class App extends Component {
  
  state = {
    count: 0
  }

  increment = (num) => {
    this.setState({
      count: this.state.count + num
    })
  }

  decrease = () => {
    this.setState({
      count: this.state.count - 1 
    })
  }

  render(){
    {console.log(this.state.count)}
    return (
      <div className="App"> 
      <Counter count={this.state.count}
      increment = {this.increment}
      decrease = {this.decrease}
      />

      </div>
    )
  }
}

export default App;
