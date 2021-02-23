import React, { Component } from 'react'
import PhoneForm from './Component/PhoneForm'
import PhoneInfoList from './Component/PhoneInfoList';

class App extends Component {

  //렌더링 되는 값이 아니기 때문에 setState에서 보여주지 않음.
  id = 0;

  //어떤 값이 변경되었을때 리렌더링하기 위해서 state를 사용.
  state = {
    infomation : [], //배열선언
    keyword: ''
  }
  
  //handleChange가 실행되어 APP 컴포넌트의 상태가 업데이트 되면, 컴포넌트의 리렌더링이 발생하고, 컴포넌트가 리렌더링되면 그 컴포넌트의 자식
  //컴포넌트도 리렌더링됨.
  handleChange = (e) => { 
    this.setState({
      keyword : e.target.value,
    });
  }

  handleCreate = (data) =>{
  
    //비구조 할당
    const { infomation } = this.state; 

    this.setState({

      //immutability 를 유지해줘야 한다.
      //방법1
      infomation : infomation.concat(Object.assign({},data,{
        id : this.id++
      }))
      
      //방법2 ( ...을 이용한 전개구문 )
      /* 
       
      infomation : infomation.concat({
        ...data,
        id : this.id++
      })
      */

      //방법3
      /*
      infomation : infomation.concat({
        name : data.name,
        phone : data.phone,
        id : this.id++
      })
      */
    });

  }

  handleRemove = (id) => {
    
    const {infomation} = this.state;
    this.setState({
      infomation : infomation.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id,data) => {
    const { infomation } = this.state;
    this.setState({
      infomation : infomation.map(info => {
        if(info.id === id){
          return{
            id,
            ...data
          };
        }
        return info;
      })
    });
  }

  //자식 component인 PhoneForm에 props로 전달.
  render() {

    const { infomation , keyword } = this.state;


    //callback 함수의 retrun은 boolean, return이 true인 애들만 모아서 새로운 배열을 생성. 생략시 return은 undefined 이므로 빈 배열 생성됨. 즉 검색 키워드가 있으면 표시 없으면 안보여지는거임.
    const filteredList = infomation.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    

    return (
      <div>
         
         <PhoneForm onCreate={this.handleCreate}/>
         {/*
         {JSON.stringify(this.state.infomation)}
         */}

         <p>
           <input placeholder="검색 할 이름을 입력하세요.."
                  onChange={this.handleChange}
                  value={keyword}
            />
         </p>
         <hr />

         <PhoneInfoList 
         //data={this.state.infomation} 
         data={filteredList}
         onRemove={this.handleRemove} 
         onUpdate={this.handleUpdate}
         />
         
      </div>
    )
  }
}

export default App;
