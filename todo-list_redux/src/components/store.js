import { createStore } from 'redux';

export default createStore(function(state,action){
    console.log(state,action); //reducer 


    //초기값 설정
    if(state === undefined){
        return {
            input : '',
            todos : [
                { id:0, text:'리액트소개', checked : false},
                { id:1, text:'리액트소개', checked : true},
                { id:2, text:'리액트소개', checked : false}
              ]
        }
    }

    /*
    switch(action.type){
        case REMOVE :

        default :
            return state;
    }*?


    
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())