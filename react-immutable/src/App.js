import React, {Component} from 'react';
import UserList from './UserList';

export default class App extends Component {

  //초기세팅
  id=3;

  //객체형식이어야한다.
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


  /** 구문 해석 
   *  
   *   1. 비구조화할당에서 변수명을 적지 않을 경우 ()로 감싸야 한다.
   *   ({users,input})
   *   2. () => { } 형태의 화살표함수는 값등을 리턴하는데 () => ({}) 형태가 되면 객체를 반환한다.
   *    ex1)   () => { return { a: 1 }} 이 부분이 () => ( {a: 1 } ) 이거와 같아지는거임.
   *   3. 즉, 아래 부분은 객체의 비구조화 할당에 해당한다.
   *   4. users:users.concat 부분에서 users.concat의 users는 const { input, users } = this.state; 이 부분에서 받아왔기 때문에 알수 있는거임.
   *   
   *   
   * 
   */
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


  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      input : value
    })
  }



  render() {

    const { onChange, onButtonClick } = this;
    const { input, users } = this.state;

    console.log(input);

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
