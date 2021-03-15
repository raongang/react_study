import './App.css';
import React, { Component } from 'react'

class App extends Component {

  //component가 mounting될때 state의 초기값 설정. lifeCycle.
  constructor(props){
    super(props);
    this.state = {isToggleOn:true}; 


  }


  render() {
    return (       
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF' }
      </button>
    );
  }
}

export default App;

