import React, { useEffect, useState } from 'react';
import {TextField,Button,Typography,Paper} from '@material-ui/core'
import FieldBase from 'react-file-base64'
import {useDispatch, useSelector} from 'react-redux'
import useStyles from './style';
import { createPost,updatePost } from '../../actions/posts';
import { useHistory } from 'react-router';
const Edit =({currentId,setCurrentId})=>{
    const classes = useStyles();
    let history=useHistory();
    const [postData,setPostData]=useState({
        creator:'',title:'',message:'',selectedFile:'',
    })
    const post=useSelector((state)=>currentId?state.posts.find((p)=>p._id===currentId):null)
    const dispatch=useDispatch();
 

    useEffect(()=>{
        if(post) setPostData(post)

    },[post])
 

    const handleSubmit=(e)=>{
        e.preventDefault();
       let path=`/`
       if(currentId){
        dispatch(updatePost(currentId,postData))
        } else{
          dispatch(createPost(postData))
        }
        history.push(path);
        clear();
    }
    
    const clear=(e)=>{
       setCurrentId(null)
       let path=`/`
       
        setPostData({ creator:'',title:'',message:'',tags:'',selectedFile:'',})
       history.push(path)
    }
    return (
        <>
        <Paper className={classes.paper} >
            <form   autoComplete="off" className={`${classes.root} ${classes.form}`}  noValidate onSubmit={handleSubmit}  >
                <Typography variant="h6">Editing A Blog</Typography>
                {/* <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator}  onChange={(e)=>setPostData({creator:e.target.value})}></TextField> */}
                <TextField name="title"  noValidate variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})} ></TextField>
                <TextField name="message" multiline rows={4} rowsMax={10} noValidate variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value})} ></TextField>
                
               
                <div className={classes.fileInput} >
                   <FieldBase type="file" multiple={false} onDone={({base64})=>setPostData({...postData,selectedFile:base64})}/>

                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >Submit</Button>
               
                <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear}  >Cancel</Button>
                
            </form>
        </Paper>
        </>
    )
    

}
export default Edit;