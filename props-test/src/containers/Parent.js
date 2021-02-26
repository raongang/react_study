
import React, { Component } from 'react'
import Child from './Child';

/** 순서1. 부모에서 함수를 정의하고 이를 자식에게 전달한다. */
class Parent extends Component {

    parentFunction  = (data) =>{
        console.log(data);
    }

    render() {
        return (
            <div>
                   <h1>부모</h1>
                    <Child parentFunction={this.parentFunction} />
                    
            </div>
        )
    }
}

export default Parent;