import {createStore} from 'redux';

export default createStore(function(state,action){
    console.log(state,action);
   
    // store의 state초기값 설정 

    if(state === undefined){
        return { number : 0 }

    }

    if(action.type === 'INCREMENT'){
        //기존의 state를 복제하고 신규데이터를 넣는다.
        return { ...state,  number : state.number + action.size}
    }

    
    return state;
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
