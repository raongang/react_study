import React,{Component} from 'react';
import './App.css';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

export default class App extends Component {

  state = { number : 0 }

  
  // AddNumber.js -> AddNumberRoot.js 자식들을 통해 넘어온 데이터(size)에 대해 부모클래스(App.js)에서 사용한다.
  
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

        {/*}
        <AddNumberRoot onClick={this.onclickHandle}></AddNumberRoot>
        <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>
        */}

        <AddNumberRoot></AddNumberRoot>
        <DisplayNumberRoot></DisplayNumberRoot>
        
      </div> 
    );
  }
}
