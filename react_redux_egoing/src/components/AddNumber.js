import React, {Component} from 'react';
export default class AddNumber extends Component {
    
    state = {size:1}

    handleChange = (e) =>{
      this.setState({size: e.target.value})
    }

    onclickHandle = () => {
      this.props.onClick(this.state.size);
    }

    render() {
      return (
        <div>
          <h1>Add Number</h1>

          
          {/* 자식컴포넌트(AddNumber)에서 부모컴포넌트(AddNumberRoot)로 입력데이터 전달하기.

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