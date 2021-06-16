import { Avatar, Container, Grid, Paper, TextField, Typography,Button } from '@material-ui/core';
// import {Google} from 'react-google-login'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import React, { useState } from 'react'
import AllList from './AllList'
import useStyles from './style'
import {signin,signup} from '../../actions/signin';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom';
const initialState = { name: '',  email: '', password: '', confirmPassword: '' };
const SignIn = () => {
    const [showPassword,setPassword]=useState(false)
    const [isSign,setSignIn]=useState(false);
   const [formData,setData]=useState(initialState)
   const history=useHistory()
   const dispatch=useDispatch();
    const classes=useStyles();
    const handleChange=(e)=>{
        setData({...formData,[e.target.name]:e.target.value})
      
 


    }
    const handleSubmit=(e)=>{
        e.preventDefault();
       if(isSign){
      
           dispatch(signup(formData,history))
       }
       else{
       
           dispatch(signin(formData,history))
         
       }

    }
    const handleShowPassword=()=>{
        setPassword((prev)=>!prev)
    }

    const switchButton=()=>{
        setData(initialState);
        setSignIn((prev)=>!prev)
      setPassword(false);

    }
   
    
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}><LockOutlinedIcon/></Avatar>
                <Typography variant="h5">{isSign?'Sign Up':'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container  spacing={3}>
                        {
                            isSign &&(
                                <>
                                  
                                    <AllList name="name" label="Name" handleChange={handleChange} autoFocus ></AllList>
                                  
                                </>
                            )
                        }
                        <AllList name="email" label="Email" handleChange={handleChange} type="email"></AllList>
                        <AllList name="password" label="Password" handleChange={handleChange}  type={showPassword?"text":"password"} handleShowPassword={handleShowPassword}/>
                        {isSign && <AllList name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" ></AllList>}
                    </Grid>
                   
                    <Button type="submit"  variant="contained" color="primary" className={classes.submit} >{isSign?'Sign Up':'Sign In'}</Button>
                    <Grid container justify="flex-end">
                    <Grid item>
                        <Button onClick={switchButton}>{isSign?'Already have an account?Sign-In':"New customer? Create your account"} </Button>
                    </Grid>

                    </Grid>
                </form>
            </Paper>
        </Container>
        
    );
}

export default SignIn
