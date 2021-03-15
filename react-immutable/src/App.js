import React, {Component} from 'react';
import UserList from './UserList';
import { Map, List } from 'immutable';

export default class App extends Component {

  //초기세팅
  id=3;


  /** ============================= Immutable 적용전 ============================= */
  //객체형식이어야한다.
  /*
  state = {
    input : '',
    users : [
      {
        id : 1,
        username : 'velopert'
      },
      {
        id:2,
        username : 'mjkim'
      }
    ]
  }
  */

  /** 구문 해석 
   *  
   *   1. 비구조화할당에서 변수명을 적지 않을 경우 ()로 감싸야 한다.
   *   ({users,input})
   *   2. () => { } 형태의 화살표함수는 값등을 리턴하는데 () => ({}) 형태가 되면 객체를 반환한다.
   *    ex1)   () => { return { a: 1 }} 이 부분이 () => ( {a: 1 } ) 이거와 같아지는거임.
   *   3. 즉, 아래 부분은 객체의 비구조화 할당에 해당한다.
   *   4. users:users.concat 부분에서 users.concat의 users는 const { input, users } = this.state; 이 부분에서 받아왔기 때문에 알수 있는거임.
   
  onButtonClick = (e) => {
    this.setState(
      ({ users, input }) => (
        {
            input: '',
            users: users.concat({
            id: this.id++,
            username: input
            })
        }
      )
    )
  }
  */       
  

  /*
       여기서 만약, text에 값을 입력하게 될 경우, User.js, UserList.js 모두 리렌더링된다.
       즉, 부모 컴포넌트가 리렌더링 되면, 자식 컴포넌트 또한 리렌더링 된다.
  
  onChange = (e) => {
    console.log("this");
    console.log(this);
    const { value } = e.target;
    this.setState({
      input : value
    })
  }
  */


  /** ============================= Immutable 적용후 ============================= */
  //immtable.js를 이용한 state. state 자체를 Immutable 데이터로 사용하는것 까지는 지원되지 않습니다. 따라서, state 내부에 하나의 Immutable 객체를 만들어두고, 상태 관리를 모두 이 객체를 통해서 진행
  state = {
    data: Map({
      input: '',
      users: List([
        Map({
          id: 1,
          username: 'velopert'
        }),
        Map({
          id: 2,
          username: 'mjkim'
        })
      ])
    })
  }

  onChnage = (e) => {
    console.log("this >> " , this);
    const { value } = e.target;
    const { data } = this.state;
    this.setState({
       data : data.set('input', value)
    })
  }

  onButtonClick = () => {
    const { data } = this.state;
    
    this.setState({
      data: data.set('input', '').update('users', users => users.push(Map({
          id: this.id++,
          username: data.get('input')
        })))
    })
  }


  render() {

    const { onChange, onButtonClick } = this;
    //const { input, users } = this.state;
    const { data } = this.state; 

    const input = data.get('input');
    const users = data.get('users');


    return (
      <div>
        <div>
          <input onChange={onChange}  value={input} />
          <button onClick={onButtonClick}>추가</button>
        </div>       
        <h1>사용자 목록</h1>
        <div>
          <UserList users={users} />
        </div>
      </div>
    )
  }
}
