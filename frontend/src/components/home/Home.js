import React, { useState } from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import Posts from '../Posts/Posts'

import {Container,Grow,Grid} from '@material-ui/core'

import Navbar from '../navbar/Navbar'
import {Button} from '@material-ui/core'

const Home=({ currentId,setCurrentId })=>{
   
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')))
    return (
        <>
        <Container maxwidth="lg">
          <Navbar></Navbar>
          <div className="create">
          {
              user?.result?( <Button component={Link} to="/new" className="button">Create New Post</Button>):(
                  <h2>Sign In to create and like the post</h2>
              )
          }
         
          </div>
           <Grow in>
               <Container>
                   <Grid container justify="space-between" alignItems="stretch" spacing={1}>
                      <Grid item xs={12} sm={12}>
                        <Posts currentId={currentId} setCurrentId={setCurrentId}></Posts> 
                      
                      </Grid>
                </Grid>
               </Container>
           </Grow>
           </Container>
        </>
    )
}
export default Home;
