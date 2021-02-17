import React, { Component } from 'react'

//배열 rendering시에는 key가 필요하고, key는 고유값이어야 한다. key는 react에서 배열 내부에서 삭제,추가등에서 효율적으로 하기 위해 사용한다.
export default class PhoneInfo extends Component {

    handleRemove = () =>{
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    render() {

        //객체의 비구조화 할당
        
        const { name, phone, id } = this.props.info;
        const style = {
            border : '1px solid black',
            padding : '8px',
            margin :  '8px',
        };

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div><b>{phone}</b></div>
                <button onClick={this.handleRemove}>삭제</button>

            </div>
        )
    }
}
