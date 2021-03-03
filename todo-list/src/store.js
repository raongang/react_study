import {createStore} from 'redux'

export default createStore(function(state,action){
    console.log(state,action);


    if(state==='undefined'){
        console.log('store undefined');
    }

    if(action.type==='TOGGLE'){

    }

    return state;
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());