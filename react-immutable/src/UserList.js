import React, { Component } from 'react'
import User from './User';

export default class UserList extends Component {

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate nextProps.value >> " , nextProps.users);
        return nextProps.users !== this.props.users; //false일때 리렌더링안함.
    }

    renderUsers = () => {
        const { users } = this.props;
        return users.map((user) => (
            <User key={user.get('id')} user={user} />
        ))
    }

    render() {

        console.log("UserList가 렌더링 되고 있어요!");
        const { renderUsers } = this;

        return (
            <div>
                {renderUsers()}
            </div>
        )
    }
}
