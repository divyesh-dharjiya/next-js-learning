import React from 'react';
import userCss from './user.module.css';

const usersList = async () => {
    const data = fetch('http://localhost:3000/api/users').then(res => res.json());
    return data;
}

const User = async () => {
    let usersData = await usersList();
    return (
        <div className={`${userCss.container} text-center`}>
            <h1 style={{color: 'black'}}>Users API Data</h1>
            {
                usersData.data.map((user) => {
                    return (<h3 key={user._id}>{user.firstName} - {user.lastName}</h3>)
                })
            }
        </div>
    )
}

export function generateMetadata() {
    return {
        title: "User page of Next JS",
        description: "User page description"
    }
}

export default User;
