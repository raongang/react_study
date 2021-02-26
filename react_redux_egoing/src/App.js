import React,{Component} from 'react';
import './App.css';
import AddNumberRoot from './containers/AddNumberRoot';
import DisplayNumberRoot from './containers/DisplayNumberRoot';

export default class App extends Component {

  state = { number : 0 }

  handleOnClick = (size) => {
    this.setState({ number : this.state.number + size});
    
  }

  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot onClick = {this.handleOnClick}></AddNumberRoot>
        <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>
      </div>
    );
  }
}
