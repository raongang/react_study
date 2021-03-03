import React,{Component} from 'react';
import TodoListTemplate from './components/TodoTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import store from './store';

class App extends Component{

  //초기 state 설정
  id = 3; //이미 0,1,2 가 존재하므로 3으로 설정
  state = {
    input : '',
    todos : [
      { id:0, text:'리액트소개', checked : false},
      { id:1, text:'리액트소개', checked : true},
      { id:2, text:'리액트소개', checked : false}
    ]
  }

  handleChange = (e) => { 
    this.setState({
      input : e.target.value
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state; 
    this.setState({
        input : '', //input비움
        //concat 이용 배열 추가
        todos : todos.concat({
          id: this.id++,
          text : input,
          checked : false
        })
    });
  }

  handleKeyPress = (e) =>{
    //눌러진 키가 Enter 면 HandleCreate 호출
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }

  
  /*
  handleToggle = (id) =>{
    const { todos }  = this.state;

     //파라미터로 받은 id를 가지고 있는 몇번쨰 아이템인지 찾는다.
     const index = todos.findIndex(todo => todo.id === id);
     const selected = todos[index];

     const nextTodos = [...todos]; //배열을 복사

     //기존의 값들을 복사하고, checked 값을 덮어쓰기
     nextTodos[index] = {
       ...selected,
       checked : !selected.checked
     };


     this.setState({
       todos : nextTodos
     });
    }
*/
  handleToggle = (id) =>{
    store.dispatch({type:'TOGGLE'})
  }



    handleRemove = (id) => {
      const { todos } = this.state;
      this.setState({
        todos : todos.filter(todo => todo.id !== id)
      });
    }


  render(){


    const { input, todos} = this.state;
    const { handleChange, handleCreate, handleKeyPress, handleToggle, handleRemove } = this;


    return( 
      <TodoListTemplate form={(
        <Form value={input}
              onKeyPress = {handleKeyPress}
              onChange = {handleChange}
              onCreate = {handleCreate}
        />
    )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    )
    
  }
}

export default App;
