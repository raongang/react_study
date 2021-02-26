import React, {Component} from 'react';
export default class AddNumber extends Component {
    
    state = {size:1}

    handleChange = (e) =>{
      this.setState({size: e.target.value})
    }

    onclickHandle = () => {
      this.props.onClick(this.state.size); //2
    }

    render() {
      return (
        <div>
          <h1>Add Number</h1>

          
          {/* 자식컴포넌트(AddNumber)에서 부모컴포넌트(AddNumberRoot)로 입력데이터 전달하기.

               1. 자식컴포넌트에서 부모로 전달할 데이터를 정하고 자식컴포넌트에서 함수를 정의한다.
               2.이떄 함수의 내용은 부모에서 자식으로 넘겨줄 props를 생각해서 만들고 파라미터에 자식의 데이터를 넣는다.

          <input type="button" value="+" onClick={ function(){
            this.props.onClick(this.state.size);
          }.bind(this)}
          ></input>
          */} 

          <input type="button" value="+" onClick={this.onclickHandle}></input>
          <input type="text" value={this.state.size} onChange={this.handleChange}></input>  
          
        </div>
      )
    }
  }