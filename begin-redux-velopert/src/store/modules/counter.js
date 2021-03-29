import { createAction, handleActions } from 'redux-actions';

//카운터 관련 상태 로직
//redux모듈을 설정한다.
//리듀서에 들어가는 액션 타입 정의
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

//리듀서에 들어가는 액션정의.
//이 함수들은 나중에 다른 파일에서 불러와야 하므로 내보내줍니다.
//export const increment = () => ({ type : INCREMENT });
//export const decrement = () => ({ type : DECREMENT });

//위의 액션생성함수 대신에 redux-action을 사용.

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

//모듈의 초기값 설정.

const initialState = { 
    number : 0
};

//리듀서를 만들어서 내봅니다.
/*
  export default function reducer(state=initialState, action){
    // 리듀서 함수에서는 액션의 타입에 따라 변화된 상태를 정의하여 반환합니다.
    // state = initialState 이렇게 하면 initialState 가 기본 값으로 사용됩니다

    console.log("reducer 진입!");
    console.log(state,action);

    
    switch(action.type){
        
        case INCREMENT :
            return { number : state.number + 1 };
        case DECREMENT : 
            return { number : state.number -1 };
        default : 
            return state; // 아무 일도 일어나지 않으면 현재 상태를 그대로 반환합니다
    }
}
*/


/* 위의 switch가 불편함으로 handleActions를 이용.
   -  handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고 두번째 파라미터는 초기 상태입니다.
*/
export default handleActions ( {
    //여기서 []를 넣고 안넣고의 차이점을 모르겠다.......??
    [INCREMENT] : ( state , action ) => {
        return { number : state.number + 1 };
    },
    //action을 사용하지 않음으로 비구조화 할당
    [DECREMENT] : ({number}) => ({number:number-1})

},initialState)    



