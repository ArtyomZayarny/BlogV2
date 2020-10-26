import React, { useState, useEffect } from 'react';
import PostItem from './PostItem';
import styles from './Navigation.module.css'

export default function Postslist({ postsList, ...props }) {
    const [pageIndex, setPageIndex] = useState(1);

    const generatePagination = (num) => {
        let pagination = [];
        for (let i = 1; i < num + 1; i++) {
            const btn = <button className={styles.indexBtn} key={i} onClick={() => { setPageIndex(i - 1) }} >{i}</button>
            pagination.push(btn)
        }
        return pagination
    }

    return (
        <>
            <div className={styles.content}>
                {postsList[pageIndex].map((post) => {
                    return <PostItem key={post.id} post={post} />
                })}
            </div>
            {generatePagination(postsList.length)}
        </>
    )
}
