import './App.css';
import React, { Component } from 'react'

class App extends Component {

  
 
  //component가 mounting될때 state의 초기값 설정. lifeCycle.
  constructor(props){
    super(props);
    this.state = {isToggleOn:true}; 

    console.log("this", this); //App.
    console.log("this.handleClick : " ,this.handleClick);

    //this.handleClick = this.handleClick.bind(this);
    //console.log("after bind this : " , this.handleClick);
  }


  /* 이렇게 하면 this는 undefined. 콜백함수 및 내부 함수는 모두 전역을 가르키므로.
  constructor에서 bind를 해줘야 함.
  
  handleClick(){
    console.log(this);
  }
  */

  //bind대신 arrow 사용. arrow는 자신이 종속된 객체 대신 자신이 종속된 instance(여기서는 App)을 가르킴.
  handleClick = () => { 
    console.log(this);
    this.setState(state => ({
      isToggleOn : this.state.isToggleOn
    }))
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

