import React,{Component} from 'react';
import DisplayNumber from '../containers/DisplayNumberCon';


class DisplayNumberRoot extends Component{
    
    render() {
    
      return (
        <div>
          <h1>Display Number Root</h1>
          <DisplayNumber unit="kg"></DisplayNumber>          
        </div>
      )
    }
  }
export default DisplayNumberRoot;
  