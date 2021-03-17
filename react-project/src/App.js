//import logo from './logo.svg';
import './App.css';
import React, { Component, Fragment } from 'react'

/* JSX 표현식2 */
class App extends Component{
  render(){
    const style = {
      backgroundColor : 'black',
      padding : '16px',
      color : 'white',
      fontSize : '36px' 
    };

    return (
      <Fragment>
        <div style={style}>하이</div>
        <div className="custom">하이2</div>
      </Fragment>
    )    
  }
}

export default App;



/* JSX 표현식1
class App extends Component {
  render(){
    const name='velopert';
    const temp = 'condition';
    const value =1;
    return (
      <Fragment>
        <div>Hello {name}</div>    
        {1+1 === 2 ? (<div>true</div>) : (<div>false</div>)}  
        {temp === 'condition' && <div>조건부</div>}

        { 
          (function(){
            if(value===1) return <div>1</div>
            return <div>nothing</div>
          })()
        }

        { 
          (() => {
            if(value===1) return <div>1</div>
            return <div>nothing</div>
          })()
        }

      </Fragment>
    );
  }
}*/

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/



