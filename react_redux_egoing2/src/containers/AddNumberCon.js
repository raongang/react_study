import React, { Component } from 'react'
import { connect } from 'react-redux';
import AddNumber from "../components/AddNumber";

//첫번째 파라미터 state가 이벤트만 전달하는 props이며, 상태를 전달하는 props는 없으므로 인자값 null.
export default connect(null,mapReduxDispatchToReactProps)(AddNumber);
                

// store의 dispatcher를 파라미터로 제공해준다.
function mapReduxDispatchToReactProps(dispatch){
    return{
        onClick : (size) =>  dispatch({type:'INCREMENT', size:size})
    }
}


/* 

    import store from '../store';

    AddNumber가 store를 사용함으로써 부품성이 되지 않고 종속적으로 변해버림. 즉 redux를 사용해야 함.
    이를 부품화하기 위해 AddNumber를 wrapping해서 redux를 사용하는지 안하는지 몰라도 아무데서나 쓸수 있게 함.
    AddNumber를 wrapping하는 컴포넌트를 보통 containers라고 함.
    그리고 redux는 이러한 containers에서 처리한다.

export default class AddNumberContainers extends Component {

    onClickHandling = (size) =>{
        store.dispatch({type:'INCREMENT', size:size})
    }

    render() {
        return <AddNumber onClick={this.onClickHandling}></AddNumber>

    }
}

*/
