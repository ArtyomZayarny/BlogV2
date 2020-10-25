import React from 'react'
import useData from '../../hooks/useData';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    wrap: {
        display: 'flex',
        marginBottom:20
    },
    content: {
        marginLeft: 10,
        paddingTop:10
    },
    avatar: {
      backgroundColor: red[500],
      margin:10
    },
  }));

export default function Comments({postId, ...props}) {
    const [comments,isFetching] = useData(`/posts/${postId}/comments`)
    const classes = useStyles();

    return (
        <ul className="comments">
            {isFetching ? <h3>Loading....</h3> : 
                comments.map( (item) => {
                return (
                    <li>
                        <Card className={classes.wrap}>
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                {item.name[0].toUpperCase()}
                            </Avatar>
                        <div className={classes.content}>  
                                <h4>{item.name}</h4>
                                <small>{item.email}</small>
                                <p>{item.body}</p>
                            </div>
                        </Card>
                    </li>
                )
                })
            }
        </ul>
    )
}
