import React, {Component} from "react";
//import AddNumber from "./AddNumber";
import AddNumber from "../containers/AddNumberCon"; //wrapping

export default class AddNumberRoot extends Component{
  
    render(){
      return (
        <div> 
          <h1>Add Number Root</h1>
          <AddNumber></AddNumber>
        </div>
      )
    }
  }