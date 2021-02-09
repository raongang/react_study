import React, { Component } from 'react'

export default class PhoneForm extends Component {

    state = {
        name: '',
        phone: '',
    }

    handleChange = (e) => { 
        // e.target.name 의 값을 key로 사용하기 위해 []를 붙임.
        this.setState({
            [e.target.name] : e.target.value
        });
    };

    // button type="submit" 일 경우 버튼을 누르면 페이지가 refresh됨. 이를 방지.
    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.value({
            name :this.state.name,
            phone : this.state.phone,
        });
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="name"  placeholder="이름" onChange={this.handleChange} value={this.state.name}/>
                <input name="phone" placeholder="전화번호" onChange={this.handleChange} value={this.state.phone}/>
                <button type="submit">등록</button>
                <div>
                    {this.state.name} {this.state.phone}
                </div>
            </form>

        )
    }
}