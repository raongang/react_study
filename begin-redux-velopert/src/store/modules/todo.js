//todo의 액션함수

import { createAction } from 'redux-actions';
import { Map, List }    from 'immutable';

//redux모듈을 설정한다, 리듀서에 들어가는 액션 타입 정의.

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

//리듀서에 들어가는 액션정의.
//이 함수들은 나중에 다른 파일에서 불러와야 하므로 내보내줍니다. 어떤 파라미터를 받는지 헷갈릴수 있으니, 두번째에 파라미터에 대한 정보를 넣어준다.
export const changeInput = createAction(CHANGE_INPUT, value => value );
export const insert = createAction(INSERT, text => text );
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

/**
 *   createAction 사용법
  
    createAction 을 통하여 만든 액션생성함수에 파라미터를 넣어서 호출하면, 자동으로 payload 라는 이름으로 통일되어 설정됩니다.
     changeInput('새로운 값'); -> { type: 'todo/CHANGE_INPUT', payload: '새로운 값' }

     객체시
     const multi = createAction('MULTI');
     multi({ foo: 1, bar: 2 });
     {
       type : 'MULTI',
       payload : {
         foo : 1 ,
         bar : 2
       }
     }

    createAction 함수의 파라미터
     - 첫번째는 액션이름, 두번째는 payloadCreator, 세번째는 metaCreator 입니다. 
     const sample = createAction('SAMPLE', (value) => value + 1, (value) => value - 1);
        sample(1); ->{ type: 'SAMPLE', payload: 2, meta: 0 }
*/

let id = 0; //todo 아이템에 들어갈 고유값.

const initialState = Map({
    input : '',
    todos : List() //빈배열
});

 export default handleActions ( {

  // 한줄짜리 코드로 반환 할 수 있는 경우엔 다음과 같이 블록 { } 를 생략 할 수 있습니다.
  // arrow function : 함수 몸체가 한줄의 구문이라면, 중괄호를 생략할 수 있다. 
  [CHANGE_INPUT]: (state, action) => state.set('input', action.payload),

  [INSERT]: (state, { payload: text }) => {
    // 위 코드는 action 객체를 비구조화 할당하고, payload 값을 text 라고 부르겠다는 의미입니다.
    const item = Map({ id: id++, checked: false, text }); // 하나 추가 할 때마다 id 값을 증가시킵니다.
    return state.update('todos', todos => todos.push(item));
  },

  [TOGGLE]: (state, { payload: id }) => {
    // id 값을 가진 index 를 찾아서 checked 값을 반전시킵니다
    const index = state.get('todos').findIndex(item => item.get('id') === id);
    return state.updateIn(['todos', index, 'checked'], checked => !checked);
  },

  [REMOVE]: (state, { payload: id }) => {
    // id 값을 가진 index 를 찾아서 지웁니다.
    const index = state.get('todos').findIndex(item => item.get('id') === id);
    return state.deleteIn(['todos', index]);
  }
  
},initialState)