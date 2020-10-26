import React, { useEffect } from 'react'
import useData from '../../hooks/useData';
import PostsSkeleton from './PostsSkeleton';
import PostsList from './PostsList';
import { arrayChunk } from '../../utils';

export default function PostsPage(props) {

    const [posts, isFetching] = useData('/posts');

    return (
        <>
            <h2>Posts page</h2>
            {isFetching ? <PostsSkeleton /> : posts.length > 0 && <PostsList postsList={arrayChunk(posts, 5)} />}
        </>
    )
}
