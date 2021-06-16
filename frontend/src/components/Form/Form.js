import React, { useEffect, useState } from 'react';
import {TextField,Button,Typography,Paper} from '@material-ui/core'
import FieldBase from 'react-file-base64'
import {useDispatch, useSelector} from 'react-redux'
import useStyles from './styles';
import { createPost,updatePost } from '../../actions/posts';
import { useHistory } from 'react-router';
const Form =({currentId,setCurrentId})=>{
    const classes = useStyles();
    let history=useHistory();
    const [postData,setPostData]=useState({
        title:'',message:'',tags:'',selectedFile:'',
    })
    const post=useSelector((state)=>currentId?state.posts.find((p)=>p._id===currentId):null)
    const dispatch=useDispatch();
    const enabled=(postData.title.length>0)&&(postData.message.length>0)
    const creator=JSON.parse(localStorage.getItem('profile'))



    useEffect(()=>{
        if(post) setPostData(post)

    },[post])
 

    const handleSubmit=(e)=>{
        e.preventDefault();
       let path=`/`
       if(currentId){
        dispatch(updatePost(currentId,{...postData,name:creator?.result?.name}))
       
       }else{
            dispatch(createPost({...postData,name:creator?.result?.name}))
         }
        history.push(path);
        clear();
     }
    
    const clear=(e)=>{
       setCurrentId(null)
       let path=`/`
       
        setPostData({ title:'',message:'',selectedFile:'',})
       history.push(path)
    }
    // if(!creator?.result?.name){
    //     return (
    //         // alert(' Sign In to create and like the post')
    //         <Paper className={classes.paper}>
    //         <Typography variant="h5" align="center">
    //             Sign In to create and like the post
    //         </Typography>

    //         </Paper>
    //     )
    // }
    return (
        <>
        <Paper className={classes.paper}>
            <form   autoComplete="off" className={`${classes.root} ${classes.form}`} noValidate onSubmit={handleSubmit} >
                <Typography variant="h6">Creating A Blog</Typography>
                
                <TextField name="title"  noValidate variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})}></TextField>
                <TextField name="message"  multiline rows={4} rowsMax={10} noValidate variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value})}></TextField>
              
               
                <div className={classes.fileInput}>
                   <FieldBase type="file" multiple={false} onDone={({base64})=>setPostData({...postData,selectedFile:base64})}/>

                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" disabled={!enabled} type="submit" >Submit</Button>
               
                <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear} >Cancel</Button>
                
            </form>
        </Paper>
        </>
    )
    

}
export default Form;