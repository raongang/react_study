// jsx만들기 위해 React 
import React from "react";

//함수형 컴포넌트 으로 props이용하기. 메모리자원을 덜 사용하고, 속도가 빠르므로 주로 props의 내용을 보여주기 위해 사용
//비구조화 할당
const MyName = ({name}) => {
    return (
        <div>안녕하세요. 제 이름은 {name}입니다.</div>
    )
}

export default MyName;


//default값 설정2
MyName.defaultProps = {
    name : '기본값'
};
