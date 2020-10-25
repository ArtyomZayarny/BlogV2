import React, {useState} from 'react'
import Comments from '../Comments/Comments';


export default function Postitem(props) {
    const [showComents,setShowComments] = useState(false)
  
    return (
        <div className="postItem">  
            <h2>{props.post.title}</h2>
            <p>{props.post.body}</p>
            <a href="#" onClick={() =>{setShowComments(!showComents)}}>Comments</a>
            {showComents && <Comments postId={props.post.id}/>} 
        </div>
    )
}
