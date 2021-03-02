import React, {Component} from 'react';
export default class AddNumber extends Component {
    
    state = {size:1}

    
    handleChange = (e) =>{
      this.setState({size: Number(e.target.value)})
    }

    onclickHandle = () => {
      this.props.onClick(this.state.size); 
    }

    render() {
     
      return (
        <div>
          <h1>Add Number</h1>

          <input type="button" value="+" onClick={this.onclickHandle}></input>
          <input type="text" value={this.state.size} onChange={this.handleChange}></input>            
        
        </div>
      )
    }
  }