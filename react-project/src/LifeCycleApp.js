import React, { Component } from 'react';
import LifeCycleMyComponent from './LifeCycleMyComponent';


class LifeCycleApp extends Component{

    state = {
        counter: 1,
        error : false
      };

      // 컴포넌트 에러 발생시
      componentDidCatch(error,info){
         //console.log("error >> " + error);
         //console.log("info >> " + info);

         this.setState({
             error : true
         });
      }// API를 통해서 서버로 오류내역 날리기
    
      //컴포넌트 초기생성시.
      constructor(props) {
        
        super(props); //component가 가지고 있던 생성자 함수를 먼저 호출해 준다.
        console.log('constructor');
      }

      //컴포넌트 초기생성시.
      componentDidMount(){
        console.log('componentDidMount'); 
        console.log(this.myDiv.getBoundingClientRect());
      }

      handleClick = () =>{
          this.setState({
              counter : this.state.counter + 1
          })
      }

    /*
        여기서 missing이 없으므로 something부분은 에러가 발생하고 render부분이 크래쉬된다.
        이때, 에러 처리는 componentDidCatch를 이용할 수 있는데 이는 에러나는 자식 컴포넌트에서는
        사용할 수 없고, 부모 component에서 사용해야 한다.
    */

    render(){

        if(this.state.error) {
            return (
                <div>에러 발생!!!</div>
            )
        }

        return(            
            <div ref = { ref => this.myDiv = ref}>
                {this.state.counter < 10 && <LifeCycleMyComponent value={this.state.counter}/> }
                <button onClick={this.handleClick}>Click me</button>
                
            </div>
        );
    }
}

export default LifeCycleApp;
