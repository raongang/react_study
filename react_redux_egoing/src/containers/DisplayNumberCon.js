import React, { Component } from 'react'
import store from '../store';
import DisplayNumber from '../components/DisplayNumber';


//DisplayNumber wraaping
export default class DisplayNumberCon extends Component {

    state = { number : store.getState().number }

    //컴포넌트 초기생성시
    constructor(props){
      super(props); // 컴포넌트가 가지고 있던 생성자 함수를 먼저 호출해줌.
      /*
      store.subscribe(function(){
        this.setState({number : store.getState().number});
      }.bind(this));
      */
      store.subscribe( ()=>{
        this.setState({number : store.getState().number});
      });
    }

    render() {
        return <DisplayNumber number={this.state.number}></DisplayNumber>
        
    }
}
