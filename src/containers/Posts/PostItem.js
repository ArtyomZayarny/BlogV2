import React, {useState} from 'react'
import Comments from '../Comments/Comments';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    link: {
        cursor:'pointer',
        color:'blue'
    }
  }));
export default function Postitem(props) {
    const [showComents,setShowComments] = useState(false)
    const classes = useStyles();
    
  
    return (
        <div className="postItem">  
            <h2>{props.post.title}</h2>
            <p>{props.post.body}</p>
            <span className={`${classes.link}`} onClick={() =>{setShowComments(!showComents)}}>Comments</span>
            {showComents && <Comments postId={props.post.id}/>} 
        </div>
    )
}
