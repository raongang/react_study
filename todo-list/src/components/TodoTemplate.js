import React from 'react';
import './TodoListTemplate.css';

/** 함수형 컴포넌트. form,children 은 APP.js에서 보내주는 props 이며 비구조화 할당 문법 사용.
 * 
 *  함수형 컴포넌트 사용예.
 *   state 나 라이프사이클 API 를 전혀 사용하지 않을 때, 그리고 해당 컴포넌트는 자체 기능은 따로 없고 props 가 들어가면 뷰가 나온다는 것을 명시하기 위해 사용
 * 
 * 
 */
const TodoListTemplate = ( { form, children }) => {
    return (
        <main className="todo-list-template">
            <div className="title">오늘 할일</div>
            <section className="form-wrapper">{form}</section>
            <section className="todos-wrapper">{children}</section>
        </main>

    );
};

export default TodoListTemplate;

