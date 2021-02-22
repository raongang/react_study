import React, { Component, Fragment } from "react";

class PhoneInfo extends Component {
  state = {
    editing: false,
    name: "",
    phone: "",
    
  };

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  handleToggleEdit = () => {
    // true -> false
    // onUpdate
    // false -> true
    // state 에 info 값들 넣어주기
    const { info, onUpdate } = this.props;
    if (this.state.editing) {
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone
      });
    } else {
      this.setState({
        name: info.name,
        phone: info.phone
      });
    }
    this.setState({
      editing: !this.state.editing
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    
    console.log('render PhoneInfo');
    
    const { name, phone } = this.props.info;

    /** 여기서 this.state.editing하면 undefined된다.
     * 
     *  비구조화 할당은 아래처럼 이용함.. 배열의 경우 좌항의 index값에 값에 할당되었다면, 객체는 같은 key에 있는 값이 담긴다.
     *  즉 this.state가 객체이므로 this.state의 key에 editing이 있으면 비구조화에 의해 const { editing } 에 세팅되는 거임.
     * 
     *  const { c, d, e = 3 } = { c: 1 };
        console.log(d); // undefined
        console.log(e); // 3
     *  
     */
    const { editing } = this.state;
 
    

    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px"
    };

    return (
      <div style={style}>
        {editing ? (
          <Fragment>
            <div>
              <input
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </div>
            <div>
              <input
                name="phone"
                onChange={this.handleChange}
                value={this.state.phone}
              />
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div>
              <b>{name}</b>
            </div>
            <div>{phone}</div>
          </Fragment>
        )}
        <button onClick={this.handleRemove}>삭제</button>
        <button onClick={this.handleToggleEdit}>
          {editing ? "적용" : "수정"}
        </button>
      </div>
    );
  }
}

export default PhoneInfo;
