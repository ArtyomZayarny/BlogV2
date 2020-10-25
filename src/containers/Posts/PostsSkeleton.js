import React from 'react';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';


export default function PostsSkeleton() {

const count = 5;

const renderskeleton = (count) => {
    const array = [];
    for (let i = 0; i < count; i++) {
       const skeleton =  <div key={i} >
           <Typography variant="h2">
               <Skeleton />
           </Typography>
           <Typography variant="subtitle1">
               <Skeleton />
           </Typography>
         </div>
         array.push(skeleton)
       }
       return array;
}                         
   
    return (
        <>
            {renderskeleton(count)}
        </>

    )
}

