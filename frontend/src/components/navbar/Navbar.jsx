import React from 'react'
import {Container,AppBar,Toolbar,Typography,Grow,Grid, Avatar, Button} from '@material-ui/core'
import {Link,useHistory,useLocation} from 'react-router-dom'
import useStyles from './style'
import {useDispatch} from 'react-redux';
import { useState,useEffect } from 'react'
import './style.css'
import decode from 'jwt-decode';
const Navbar = () => {
    const classes=useStyles();
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')))
   const dispatch=useDispatch();
   const location=useLocation();
  
    useEffect(() => {
        const token=user?.token;
        if(token){
            const decodeToken=decode(token)
            if(decodeToken.exp*1000<new Date().getTime) handleLogout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])
  const history=useHistory();
    const handleLogout=()=>{
        history.push('/')
        dispatch({type:'LOGOUT'})
       
        setUser(null);

    }
    
    return (
        <AppBar className={classes.app} position="static" color="inherit" maxWidth="lg">
        <div className={classes.container}>
        <Typography className={classes.heading} component={Link} to='/' variant="h2" align="center">BLOG</Typography>

        </div>

        <Toolbar className={classes.toolbar}>
          {user?.result?(
              <div className={classes.profile} className="profile1">
                 
                  <Typography className={classes.userName} variant="h5"> {user.result.name}</Typography>
                  <Button variant="contained" className={classes.logout} className="logout" color="primary" onClick={handleLogout}>Logout</Button>

              </div>
          ):(
              <Button component={Link} to="/signin" variant="contained" color="secondary">Sign In</Button>
          )}

        </Toolbar>
       
        
    </AppBar>
    )
}

export default Navbar
