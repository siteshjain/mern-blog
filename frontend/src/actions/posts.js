import * as api from '../api'
import {FETCH_ALL,DELETE,CREATE,UPDATE,LIKE,READ,COMMENT} from '../constant/actionTypes'
export const getPosts=()=> async(dispatch)=>{
    
    try{
        const {data}=await api.fetchPosts();

        dispatch({type:FETCH_ALL,payload:data})
    }catch(error){
        console.log(error.message)

    }

    
}

export const createPost=(post)=>async(dispatch)=>{
    try{
        const {data}=await api.createPost(post);

        dispatch({type:CREATE,payload:data})

    }catch(error){
        console.log(error)
    }
}


export const updatePost=(id,post)=>async(dispatch)=>{
    try{
         const {data}=await api.updatePost(id,post);
       
         dispatch({type:UPDATE,payload:data})

    }catch(error){
        console.log(error)
    }

}

export const deletePost=(id)=>async(dispatch)=>{
    try{
        await api.deletePost(id);

        dispatch({type:DELETE,payload:id})

    }catch(error){
        console.log(error)

    }
}

export const likePost=(id)=>async(dispatch)=>{
    try{
        const {data}=await api.likePost(id);
       
        dispatch({type:LIKE,payload:data})

   }catch(error){
       console.log(error)
   }
    
}


export const readPost=(id)=>async(dispatch)=>{
    try{
        const {data}=await api.readPost(id);
       
        dispatch({type:READ,payload:data})
    }catch(error){
        console.log(error);
    }
}

export const commentPost=(val,id)=>async(dispatch)=>{
    try{
        const {data}=await api.comment(val,id);
        dispatch({type:COMMENT,payload:data});
    
        return data.comments;
    }
    catch(error){
        console.log(error);
    }
}