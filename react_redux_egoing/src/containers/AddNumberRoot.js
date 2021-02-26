import React, {Component} from "react";
import AddNumber from "../components/AddNumber";
export default class AddNumberRoot extends Component{


  /* 자식클래스인 AddNumber.js에서  this.props.onClick(this.state.size)으로 넘어왔으니
     자식 자식클래스(AddNumberRoot.js)에서 함수를 정의하고, 부모클래스의 props에 데이터(size)를 넘긴다
  */

  onclickHandle = (size) => {
   
      this.props.onClick(size);
    }

    render(){
      return (
        <div> 
          <h1>Add Number Root</h1>
      
         {/* 
          <AddNumber onClick={
              function(size){
                //alert('size : ' + size);
                this.props.onClick(size);
              }.bind(this)
          }></AddNumber>
        */}
         

           <AddNumber onClick={this.onclickHandle}></AddNumber>

        </div>
      )
    }
  }