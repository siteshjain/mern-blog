import React, { useState } from 'react';
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import useStyles from './style'
import {useDispatch} from 'react-redux'
import './styles.css'
import {deletePost,likePost} from '../../../actions/posts'
import { useHistory } from 'react-router';




const Post =({ post,currentId,setCurrentId })=>{
    const classes=useStyles();
    const dispatch=useDispatch();
    const history=useHistory();
    const user=JSON.parse(localStorage.getItem('profile'))
    const [likes,setLikes]=useState(post?.likes)

   const handleSubmit=()=>{
       let path=`/${post._id}`;
       setCurrentId(post._id)
       history.push(path)
   }
   const editBlog=()=>{
       let path=`/edit/${post._id}`;

       setCurrentId(post._id);
       history.push(path);
   }
   const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  }; 
  const hasLike=post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
  const handleLike=async()=>{
    dispatch(likePost(post._id))
    if(hasLike){
      setLikes(post.likes.filter((id)=>id!==(user?.result?._id)))
    }
    else{
       setLikes([...post.likes,user?.result?._id])
    }
  }
  
  

    return (
        <>
      
        <Card className="card">
            <CardMedia className="media" image={post.selectedFile} title={post.title}></CardMedia>
            <div className={classes.overlay}>
                <Typography className={classes.creator} variant="h6">{post.name}</Typography>
                <Typography variant="body2" className={classes.date}>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            {
                (user?.result?._id===post?.creator)&&
                <div className={classes.overlay2} >
                <Button style={{color:'black'}} size="small" onClick={editBlog}><MoreHorizIcon fontSize="default"></MoreHorizIcon></Button>
                 </div>
            }
          
           <Typography className={classes.title}  gutterBottom variant="h5" component="h2">{post.title}</Typography>
          
          <CardContent className={classes.centerBtn}>
           <Button onClick={handleSubmit} className={classes.read} className="readMore" variant="contained" type="submit" size="small">Read More</Button>
         </CardContent>

          <CardActions className={classes.cardActions}>
              <Button size="small" color="primary" disabled={!user?.result} onClick={handleLike}>
                  <Likes/>
              </Button>
             
              {(user?.result?._id===post?.creator)&&
                <Button size="small" color="primary" className={classes.delete} onClick={()=>dispatch(deletePost(post._id))}><DeleteIcon fontSize="small"></DeleteIcon>Delete</Button>
                 
              }
             
          </CardActions>
        </Card>
        </>
        
    )

}
export default Post;





