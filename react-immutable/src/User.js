import React, { Component } from 'react'

export default class User extends Component {
    render() {

        const { user : {username} } = this.props;
       // console.log('%s가 렌더링 되고 있습니다.', username);
    
        return (
            <div>
                {username}
            </div>
        )
    }
}
