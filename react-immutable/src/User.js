import React, { Component } from 'react'

export default class User extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.users !== this.props.users;
    }

    render() {

        const { username } = this.props.user.toJS();
        console.log('%s가 렌더링 되고 있어요!!!', username);

        return (
            <div>
                {username}
            </div>
        )
    }
}
