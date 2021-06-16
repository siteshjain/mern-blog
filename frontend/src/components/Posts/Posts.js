import React from 'react';
import {Grid,CircularProgress} from '@material-ui/core'
import Post from './Post/Post'
import {useSelector} from 'react-redux'
import useStyles from './styles';

const Posts =({currentId, setCurrentId })=>{
const posts=useSelector((state)=>state.posts)

 const classes=useStyles();
    return (
        <>
        {
            !posts.length?<CircularProgress/>:
            (
            
                <Grid className={classes.mainContainer} alignItems="stretch" justify="center"   container spacing={6}>
                {
                    posts.map((post)=>{
                         return <Grid key={post._id} item xs={12} sm={6} md={4}>
                            <Post post={ post } currentId={currentId} setCurrentId={ setCurrentId } />
                        </Grid>
                    })
                 }
                 </Grid>
               )
        }
        </>
        
    )

}
export default Posts;