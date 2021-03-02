import DisplayNumber from '../components/DisplayNumber';
import {connect} from 'react-redux';

//아래 displayNumber 컴포넌트를 wrapping해서 DisplayNumberCon 컨테이너를 수동으로 만들었는데 이 역할을 자동으로 해준다.
export default connect(mapReduxStateToReactProps)(DisplayNumber);

/*
그리고 여기서 store를 제공해야 하는데... 스토어는 최상위 컴포넌트(여기서는 index.js)에 Provicer형태로 store를 제공해주면
 해당 provider안의 App 에 연결된 모든 컴포넌트들은 store를 이용할 수 있다.
여기서 DisplayNumberRoot.js에서 unit을 props로 전달했는데 connect()부분이 자동으로 이를 components/DisplayNumber.js로 전달해준다.
*/

//subscribe 에서 state가 바뀌는 부분과 동일한 기능임.
function mapReduxStateToReactProps(state){
  //numbers : props , 
   return{ number : state.number }
}

/*
import DisplayNumber from '../components/DisplayNumber';
import React, { Component } from 'react'
import store from '../store';
//DisplayNumber wraaping
export default class DisplayNumberCon extends Component {

    state = { number : store.getState().number }

    //컴포넌트 초기생성시
    constructor(props){
      super(props); // 컴포넌트가 가지고 있던 생성자 함수를 먼저 호출해줌.

      store.subscribe( ()=>{
        this.setState({number : store.getState().number});
      });
    }

    render() {
        return <DisplayNumber number={this.state.number} 
                              unit={this.props.unit}>
              </DisplayNumber>
        
    }
}
*/
