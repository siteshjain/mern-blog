import React, { useEffect, useState } from 'react'

import {useDispatch} from 'react-redux'
import {getPosts} from './actions/posts'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Form from './components/Form/Form'
import Home from './components/home/Home'
import Edit from './components/edit/Edit'
import Read from './components/read/Read'
import SignIn from './components/signin/SignIn';
const App=()=>{
 const [currentId,setCurrentId]=useState(null)
 
    const dispatch=useDispatch();
   useEffect(()=>{
        dispatch(getPosts())
    },[currentId,dispatch])
    return (
        <>
       
       <BrowserRouter>
      

       <Switch>
      <Route exact path="/"><Home currentId={currentId}  setCurrentId={setCurrentId} /> </Route>
      <Route path ="/signin"><SignIn /> </Route>
      <Route path="/new"> <Form currentId={currentId} setCurrentId={setCurrentId} /> </Route>
       <Route path="/edit/:id"> <Edit currentId={currentId} setCurrentId={setCurrentId}/> </Route>
       <Route path="/:id"><Read currentId={currentId} setCurrentId={setCurrentId}/></Route>
        </Switch>
      </BrowserRouter>
       </>
    )
}
export default App;

