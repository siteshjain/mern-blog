import React from 'react';
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
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };
  

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
                <Button style={{color:'white'}} size="small" onClick={editBlog}><MoreHorizIcon fontSize="default"></MoreHorizIcon></Button>
                 </div>
            }
          
           <Typography className={classes.title}  gutterBottom variant="h5" component="h2">{post.title}</Typography>
          
          <CardContent className={classes.centerBtn}>
           <Button onClick={handleSubmit} className={classes.read} className="readMore" variant="contained" type="submit" size="small">Read More</Button>
         </CardContent>

          <CardActions className={classes.cardActions}>
              <Button size="small" color="primary" disabled={!user?.result} onClick={()=>{dispatch(likePost(post._id))}}>
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





