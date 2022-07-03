import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice';

export const UserView = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchUsers());
    },[])
    return (
        <div>
            <h2>List of Users</h2>
            {user.loading && <h5>Loading...</h5>}
            {!user.loading && user.error ? <h5>Error: {user.error}</h5> : null}
            {!user.loading && user.users.length ? 
                <ul>
                    {
                        user.users.map(user => (
                            <li key={user.id}>{user.name}</li>
                        ))
                    }
                </ul>
                : null
            }
        </div>
    )
}
