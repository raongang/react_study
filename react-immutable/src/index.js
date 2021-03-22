import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Map, List } from 'immutable';

/* Immutable.js 테스트

  1. 객체는 Map
  2. 배열은 List
  3. 설정할땐 set
  4. 읽을땐 get
  5. 읽은다음에 설정 할 땐 update
  6. 내부에 있는걸 ~ 할땐 뒤에 In 을 붙인다: setIn, getIn, updateIn
  7. 일반 자바스크립트 객체로 변환 할 땐 toJS
  8. List 엔 배열 내장함수와 비슷한 함수들이 있다 – push, slice, filter, sort, concat… 전부 불변함을 유지함
  9. 특정 key 를 지울때 (혹은 List 에서 원소를 지울 때) delete 사용
  
//1. 객체는 Map
const obj = Map(
  {
  foo : 1,
  inner : Map( { 
    bar : 10
  })
});

console.log("============ 1. 객체 출력 ============");
console.log(obj);

console.log("============ 2. 배열 출력 ============");

const arr = List(
  [
  Map({foo : 1}),
  Map({bar : 2}),
  ]);

  console.log(arr);
  console.log(arr.toJS());

  console.log("============ 3. 설정할땐 set ============");

  let nextObj = obj.set('foo',5);
  console.log(nextObj);
  console.log(nextObj.toJS());
  console.log(nextObj !== obj); // true  


  console.log("============ 4. 값을 읽을땐 get ============");
  console.log(obj.get('foo'));
  console.log(arr.get(0)); // list에는 index를 설정하여 읽음.


  console.log("============ 5. 읽은 다음에 설정할 때는 update ============");
  //두번째 파라미터로는 updater 함수가 들어감.
  nextObj = nextObj.update('foo', value=>value+1);
  console.log(nextObj.toJS());


  console.log("============ 6. 내부에 있는 걸 ~ 할때는 In을 붙인다. ============");
  nextObj = obj.setIn(['inner','bar'],20);
  console.log(nextObj.getIn(['inner','bar']));


  console.log("============ 7. list 내장 함수는 배열과 비슷하다. ============");
  let nextArr = arr.push(Map({qaz:3}));
  console.log(nextArr.toJS());
  nextArr = arr.filter(item => item.get('foo') === 1); 
  console.log(nextArr.toJS());


  console.log("============ 8. delete로 key를 지울 수 있음. ============");
  nextObj = nextObj.delete('foo');
  console.log(nextObj.toJS());

  nextArr = nextArr.delete(0);
  console.log(nextArr.toJS());
*/


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
