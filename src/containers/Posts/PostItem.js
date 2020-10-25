import React from 'react'

export default function Postitem(props) {
    
    return (
        <div className="postItem">
            <h2>{props.post.title}</h2>
            <p>{props.post.body}</p>
        </div>
    )
}
