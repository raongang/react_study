import React, { Component } from 'react'                    
import Child from './containers/Child'
import Praent from './containers/Parent'

/** 자식에서 부모로 props 전달하는 방법
 *    
 *   부모에서 자식으로 전달할때는 props를 이용한다.
 *   자식에서 부모로 전달할때는 함수를 이용한다.
 * 
 */
export default class App extends Component {
  render() {
    return (
        <div>
          <h1>App</h1>
          <Praent></Praent>
          
         
        </div>
      
    )
  }
}
