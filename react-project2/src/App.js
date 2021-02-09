import React, { Component } from 'react'
import PhoneForm from './Component/PhoneForm'

class App extends Component {

  state = {
    infomation : [],
  }

  handleCreate = (data) =>{
  
    this.setState({
      information : this.state.infomation.concat(data)
    })
    
  }

  //자식 component인 PhoneForm에 props로 전달.
  render() {
    return (
      <div>
         <PhoneForm value={this.handleCreate}/>
      </div>
    )
  }
}

export default App;
