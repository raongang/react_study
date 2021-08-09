import { Component , useState, useEffect} from 'react';
import './App.css';

/**
 *    function 방식과 class 방식
 *         - props는 둘다 사용가능
 *         - state는 class방식만 되었으나, hook이 나오면서 function방식에서도 가능하게 됨.
 *         - hook은 리액트 16.8에서 추가됨.
 *  
 */

function App() { 
  return (
    <div className="container">
        <h1>Hello World</h1>
        <FuncComp initNumber={2}></FuncComp>
        <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}


var funcStyle = 'color:blue';
var funcId = 0;

//함수 방식에서 props받기. 파라미터에 props를 넣는다. 이름은 아무거나 해도 됨.
function FuncComp(props){
  /* HOOK사용 
     HOOK은 useState를 이용한다. useState의 리턴값은 배열이며 첫번째 값은 초기 props값 , 두번째 값이 setState같은 역할. class component에서 setState이후 re-rendering 되는것처럼.
  */
  var numberState = useState(props.initNumber);
  var number = numberState[0];
  var setNumber  = numberState[1];

  // var dateState = useState((new Date()).toString());
  // var _date = dateState[0];
  // var setDate  = dateState[1];

  //축약형
  var [_date, setDate] = useState((new Date()).toString());

  //useEffect -> render가 호출이 끝난 뒤에 호출된다. 첫번째 인자는 함수 , 복수 개 설정 가능. 파라미터는 함수여야 한다.
  //side effect
  useEffect(function(){
    console.log('%cfunc => useEffect  (ComponentDidMount & componentDidUpdate ) '+ (++funcId), funcStyle);
    //document.title = number + ' : ' + _date;

    /* effect clen-up.  
        다시 실행될떄는 return부분이 먼저 실행되고 그 다음에 다시 useEffect가 실행된다. componentWillUnmount와 같이 생각 할 수 있음.
    */

    return function(){ 
      console.log('%cfunc => useEffect  return (ComponentDidMount & componentDidUpdate ) '+ (++funcId), funcStyle);
    }
  });

  console.log('%cfunc => render '+ (++funcId) ,  funcStyle);
  
  return(
    <div className="container">
        <h2>function style component</h2>
        {/* <p>Number : {props.initNumber}</p> */}
        <p>Number : {number}</p>
        <p>Date : {_date}</p>

        <input type="button" value="random" onClick={
            function(){
              setNumber(Math.random());
            }
          }></input>

        <input type="button" value="date" onClick={
            function(){
              setDate((new Date()).toString());
            }
          }></input>
    </div>
  );
}

//state가 변화할 때마다 render가 재호출이 된다.
var cssStyle = 'color:red'
class ClassComp extends Component {

  state = { 
    number : this.props.initNumber,
    date : (new Date()).toString()
  }

  componentWillMount(){
    console.log("%cclass => componentWillMount", cssStyle);
  }

  componentDidMount(){
    console.log("%cclass => componentDidMount", cssStyle);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("%cclass =>   shouldComponentUpdate", cssStyle);
      return true; // true-> render call,  flase -> reder no call
  }

  componentWillUpdate(nextProps, nextState){
    console.log("%cclass =>   componentWillUpdate", cssStyle);
  } 

  componentDidUpdate(nextProps, nextState){
    console.log("%cclass =>   componentDidUpdate", cssStyle);
  }

  render() {
    console.log('%crender execute',cssStyle);
    return (
      <div className="container">
          <h2>class style component</h2>
          <p>Number : {this.state.number}</p>
          <p>Date : {this.state.date}</p>

          <input type="button" value="random" onClick={
            function(){
              this.setState({number : Math.random()})
            }.bind(this)
          }></input>

          <input type="button" value="date" onClick={
            function(){
              this.setState({date : (new Date()).toString()})
            }.bind(this)
          }></input>

          
      </div>
    )
  }
}


export default App;


