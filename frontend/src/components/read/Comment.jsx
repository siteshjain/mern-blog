import React, { useState,useRef } from 'react'
import {useDispatch} from 'react-redux'
import {Typography,TextField, Button} from '@material-ui/core'
import {commentPost} from '../../actions/posts'
import './style.css'
const Comment = ({post1}) => {
    const [commentaaa,setComment]=useState(post1?.comments)
    const [details,setDetails]=useState()
   const commentsRef=useRef();
    const user=JSON.parse(localStorage.getItem('profile'))
    const dispatch=useDispatch();
   
    const handleClick=async()=>{
        const post_comment=await dispatch(commentPost(`${user.result?.name}: ${details}`,post1._id))      ;
      
        setDetails('');
        setComment(post_comment)

        commentsRef.current.scrollIntoView({behavior:'smooth'})
    }
    return (
        <div className="outer_div">
        <div className="inner_div">
            <Typography variant="h5" gutterBottom >Comments</Typography>
           {
               commentaaa?.map((c,i)=>(
                   <Typography key={i} gutterBottom variant="subtitle1">
                       <strong style={{color:"black"}}>{c.split(': ')[0]}:</strong>
                         {c.split(':')[1]}
                   </Typography>
               ))
           }
           <div ref={commentsRef}></div>
        </div>
       {user?.result?.name&&(
        <div style={{width:'70%'}}>
            <Typography gutterBottom variant="h5">Write a Comment</Typography>
            <TextField
                rows={3}
                variant="outlined"
                fullWidth
                label="Comment"
                multiline
                value={details}
                onChange={(e)=>setDetails(e.target.value)}
            />
            <Button style={{marginTop:'10px'}}  fullWidth variant="contained" disabled={!details} onClick={handleClick}>button</Button>
        </div>

       )}
        </div>
    )
}

export default Comment
