import React, { Component } from 'react'
import AddNumber from "../components/AddNumber";
import store from '../store';

/* 
    AddNumber가 store를 사용함으로써 부품성이 되지 않고 종속적으로 변해버림. 즉 redux를 사용해야 함.
    이를 부품화하기 위해 AddNumber를 wrapping해서 redux를 사용하는지 안하는지 몰라도 아무데서나 쓸수 있게 함.
    AddNumber를 wrapping하는 컴포넌트를 보통 containers라고 함.

    그리고 redux는 이러한 containers에서 처리한다.
*/
export default class AddNumberContainers extends Component {

    onClickHandling = (size) =>{
        store.dispatch({type:'INCREMENT', size:size})
    }

    render() {
        return <AddNumber onClick={this.onClickHandling}></AddNumber>

    }
}
