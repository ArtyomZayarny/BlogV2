import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';
import useData from '../../hooks/useData';
import User from './User';

export default function UserPage(props) {
    const {postId} = useParams();
    const [users,isFetching] = useData('/users');
    const [user,setUser] = useState({})
  
    useEffect( () => {
    
        if (users.length > 0) {
            const user = users.filter( item => item.id === parseInt(postId))[0];
            setUser(user);
        }
    }, [users])
 

    return (
        <>
            <h2>User page</h2>
            {isFetching ? 'Loading....' :  <User  {...user}/>}
        </>
    )
}
