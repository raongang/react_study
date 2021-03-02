import React,{Component} from 'react';
import './App.css';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Root</h1>

        <AddNumberRoot></AddNumberRoot>
        <DisplayNumberRoot></DisplayNumberRoot>
        
      </div> 
    );
  }
}
