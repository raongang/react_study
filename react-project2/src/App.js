import React, { Component } from 'react'
import PhoneForm from './Component/PhoneForm'
import PhoneInfoList from './Component/PhoneInfoList';

class App extends Component {

  //렌더링 되는 값이 아니기 때문에 setState에서 보여주지 않음.
  id = 0;

  //어떤 값이 변경되었을때 리렌더링하기 위해서 state를 사용.
  state = {
    infomation : [], //배열선언
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
    console.log("this");
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
    return (
      <div>
         <PhoneForm onCreate={this.handleCreate}/>
         {/*
         {JSON.stringify(this.state.infomation)}
         */}
         <PhoneInfoList 
         data={this.state.infomation} 
         onRemove={this.handleRemove} 
         onUpdate={this.handleUpdate}
         />
         
      </div>
    )
  }
}

export default App;
