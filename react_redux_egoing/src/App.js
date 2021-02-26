import React,{Component} from 'react';
import './App.css';
import AddNumberRoot from './containers/AddNumberRoot';
import DisplayNumberRoot from './containers/DisplayNumberRoot';

export default class App extends Component {

  state = { number : 0 }

  onclickHandle = (size) => {
    this.setState({ number : this.state.number + size});
  }

  render() {
    return (
      <div className="App">
        <h1>Root</h1>

        {/* 
        <AddNumberRoot onClick={function(size){
          this.setState({ number : this.state.number + size});
        }.bind(this)}></AddNumberRoot>
        */}

        <AddNumberRoot onClick={this.onclickHandle}></AddNumberRoot>
        <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>
      </div> 
    );
  }
}
