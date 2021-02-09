import React, { Component } from "react";


class Childcom extends Component {

    /* default값 설정1
    static defaultProps = {
        name : '기본이름'
    }*/

    render(){
        return (
            <div>안녕하세요! 제 이름은 <b>{this.props.name}</b>입니다.</div>
        )
    }
};

//default값 설정2
Childcom.defaultProps = {
    name : '기본값'
};

export default Childcom;
