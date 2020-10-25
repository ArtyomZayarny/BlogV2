import React, { useEffect } from 'react';
import PostItem from './PostItem';

export default function Postslist({postsList, ...props}) {
    useEffect( () => {
console.log('postsList',postsList);
    }, [])
    return (
        <>
             {postsList[0].map( (post) => {
                return <PostItem key={post.id} post={post}/>
            })} 
        </>
    )
}
