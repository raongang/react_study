
import React, { Component } from 'react';


class LifeCycleMyComponent extends Component{

    state = { 
        value : 0
    };

    // LifeCycle 컴포넌트 업데이트시에.
    // props로 받아온 값을 state로 동기화 할때 이용.
    static getDerivedStateFromProps(nextProps, prevState) {

        console.log("getDerivedStateFromProps nextProps.value >> " + nextProps.value);
        console.log("getDerivedStateFromPropsprevState.value >> " + prevState.value);

        if(prevState.value!== nextProps.value){
            return {
                value : nextProps.value
            }
        }

        // return null; 변경할 값이 없을떄.
    }

    // 컴포넌트 업데이트시에 -  update를 막아줄수 있는 함수 정도로 생각하자.
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate nextProps.value >> " + nextProps.value);
        if (nextProps.value === 10) return false; //값은 바뀌지만 렌더링 하지 않는다.
        return true;
    }

    // 컴포넌트 업데이트시
    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.props.value !== prevProps.value){
            console.log('value 값이 변경되었다.');
        }
    }

    // 컴포넌트 삭제시
    componentWillUnmount(){
        console.log('div is deleted');
    }

    render(){
        return ( 
            <div>
                {/* <p>{this.props.missing.something}</p> */}
                <p>props : {this.props.value}</p>
                <p>state : {this.state.value}</p>

            </div>
        )
    }
}

export default LifeCycleMyComponent;
