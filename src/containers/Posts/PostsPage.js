import React, { useEffect } from 'react'
import useData from '../../hooks/useData';
import PostsSkeleton from './PostsSkeleton';
import PostsList from './PostsList';
import {arrayChunk} from '../../utils';
import { Button } from '@material-ui/core';



export default function PostsPage(props) {

      const [posts,isFetching] = useData('/posts');
   

      const generatePagination = (num) => {
            let pagination = [];
            for (let i = 1; i < num + 1; i++) {
                  const btn = <button key={i}>{i}</button>
                  pagination.push(btn)
            }
            return pagination
      }

      return (
            <>
            
            <h2>Posts page</h2>      
            {isFetching ?  <PostsSkeleton /> : posts.length > 0 && <PostsList postsList={arrayChunk(posts, 5)}/>}
            </>
      )
}
