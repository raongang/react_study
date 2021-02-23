import React, { Component } from 'react'
import PhoneInfo from './PhoneInfo'

export default class PhoneInfoList extends Component {

    static defaultProps = {
        data : [],
        onRemove : () => console.warn('onRemove not define'),
    }

    // react lifeCycle 
    shouldComponentUpdate(nextProps, nextState){
        // 컴포넌트 업데이트시에 -  update를 막아줄수 있는 함수 정도로 생각하자. 즉, Virtual DOM 에 렌더링 하는 자원은 아낄 수 있으면 아끼는게 좋음.
        //console.log("shouldComponentUpdate nextProps.value >> " , nextProps.value);
        //console.log("shouldComponentUpdate nextProps.data >> " , nextProps.data);
        //console.log("shouldComponentUpdate this.props.data >> " , this.props.data);

        return nextProps.data !== this.props.data;
    }


    render() {

        console.log('render PhoneInfoList');
        const {data, onRemove, onUpdate} = this.props;
        
        //if(!data) return null;

        const list = data.map( 
            info => ( <PhoneInfo 
                info={info} 
                key={info.id} 
                onRemove={onRemove}
                onUpdate={onUpdate}
                /> )
        )

        return (
            <div>
                {list}
            </div>
        )
    }
}
