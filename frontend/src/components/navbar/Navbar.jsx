import React from 'react'
import {AppBar,Toolbar,Typography, Button} from '@material-ui/core'
import {Link,useHistory,useLocation} from 'react-router-dom'
import useStyles from './style'
import {useDispatch} from 'react-redux';
import { useState,useEffect } from 'react'
import './style.css'
import decode from 'jwt-decode';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
const Navbar = () => {
    const classes=useStyles();
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')))
    const [anchorEl, setAnchorEl] = useState(null);
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
      setAnchorEl(null);
        history.push('/')
        dispatch({type:'LOGOUT'})
       
        setUser(null);

    }


  const handleClick2 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl(null);
  };
    
    return (
        <AppBar className={classes.app} position="static" color="inherit" maxwidth="lg">
        <div className={classes.container}>
        <Typography className={classes.heading} component={Link} to='/' variant="h2" align="center">BLOG</Typography>

        </div>

        <Toolbar className={classes.toolbar}>
          {user?.result?(
            <div>
         <Button aria-controls="simple-menu" aria-haspopup="true" className="user_button" onClick={handleClick2}>
         {user.result.name}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose2}
      >
        <MenuItem onClick={handleClose2}>Profile</MenuItem>
      
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
          ):(
              <Button component={Link} to="/signin" variant="contained" color="white">Login/Register</Button>
          )}

        </Toolbar>
       
        
    </AppBar>
    )
}

export default Navbar
