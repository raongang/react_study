// 리덕스와 연동된 컨테이너 컴포넌트 작성

import React, { Component } from 'react'
import Todos from 'components/Todos';
import { connect } from 'react-redux';
import { bindActionCreator } from 'redux';
import * as todoActions from 'store/modules/todo';

class TodosContainer extends Component {

    handleChange = (e) => {
        //인풋값 변경
      this.props.changeInput(e.target.vlaue);
    }

    handleInsert = () => {
        //아이템 추가
    }

    handleToggle = (id) => { 
        //삭제된 켜고 끄기
    }

    handleRemove = (id) => { 
        //아이템 제거
    }

    render() {
        //console.log(this);
        //console.log(this.props);
        const { handleChange, handleInsert, handleToggle, handleRemove } = this;
        const { input, todos } = this.props;

        return (
            <Todos 
                input = {input}
                todos = {todos}
                onChange = {handleChange}
                onInsert = {handleInsert}
                onToggle = {handleToggle}
                onRemove = {handleRemove}            
            />
        );
    }
}

// store connect를 통해 props로 전달한다.이 부분의 의해 전달된 값이 render의 
// const {input,todos} = this.props부분이 됨.

const mapDispatchToProps = (dispatch) =>({
    changeInput : () =>  dispatch(todoActions.changeInput())
})

export default connect(
    //state를 비구조화 할당함.
    ({todo}) => ({
        //immutable을 사용하니, 값을 조회할때는 .get을 이용한다.
        input : todo.get('input'),
        todos : todo.get('todos')
    }), mapDispatchToProps)(TodosContainer);
