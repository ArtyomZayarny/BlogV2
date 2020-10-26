import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';
import useData from '../../hooks/useData';
import User from './User';

export default function UserPage(props) {
    const {userId} = useParams();
    const [user,isFetching] = useData(`/users/${userId}`);

    return (
        <>
            <h2>User page</h2>
            {isFetching ? <h2>Loading....</h2> : <User  {...user}/>}
        </>
    )
}
