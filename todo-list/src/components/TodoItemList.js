
import React, { Component } from 'react';
import TodoItem from './TodoItem';

/**
 *  ‘리스트’ 를 렌더링하게 될 때는, 특히 보여주는 리스트가 동적인 경우에는 함수형이 아닌 클래스형 컴포넌트로 작성 권장.
 *   클래스형 컴포넌트로 작성해야 나중에 컴포넌트 성능 최적화를 할 수 있기 때문
 */

  
export default class TodoItemList extends Component {


     //컴포넌트 최적화
     shouldComponentUpdate(nextProps, nextState){
         return this.props.todos !== nextProps.todos;
     }

     render() {
         
         const { todos, onToggle, onRemove } = this.props;


        const todoList = todos.map(({id,text,checked}) => (
            <TodoItem id={id}
            text = {text}
            checked={checked}
            onToggle={onToggle}
            onRemove={onRemove}
            key={id}
            />
            )
        );


         return (
             <div>{todoList}</div>
         )
     }
 }
 