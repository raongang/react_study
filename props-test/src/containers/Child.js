import React, { Component } from 'react'

/*순서2. 자식컴포넌트에서 실행하고자 하는 이벤트에 함수를 주고, 이 함수의 실행문에 부모에게 전달받은 
         함수를 넣고 그 인자로 자식의 데이터를 넣는다.
*/
class Child extends Component {

    childText = 'childText';

    childFunction = () =>{
        this.props.parentFunction(this.childText); 
    }

    render() {
        return (

            <div>
                <h1>자식</h1>
                <button onClick={this.childFunction}>버튼</button>
            </div>
        )
    }
}

export default Child;