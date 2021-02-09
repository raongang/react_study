//state 예제.

import React, { Component } from 'react';
class Counter extends Component{

    //무조건 객체야야 한다.
    state = {
        number : 0
    }

    // 화살표 표현은 this가 자신의 종속된 instance를 가르킴.
    handleIncrease = () => {
        this.setState({ 
            number:  this.state.number + 1 
        })
    }

    //이렇게 할 경우 this가 어떤지 모른다. 왜냐면 기존 함수는 this가 자신의 종속된 객체를 가르킨다. 아래처럼 constructor를 생성해야 함.
    handleDecrease(){ 
        //console.log(this); //this -> undefined.
        this.setState({
            number : this.state.number - 1
        });
    }

    //Constructor는 Component가 만들어질때마다 호출되는 함수.
    constructor(props){
        super(props);
        this.handleDecrease = this.handleDecrease.bind(this);
    }

    render(){
        return(
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number} </div> 
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }
}

export default Counter;