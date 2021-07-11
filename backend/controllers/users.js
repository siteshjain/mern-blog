import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/models2.js'

export const signin=async(req,res)=>{
    const {email,password}=req.body;
    try {
        const isUserExist=await User.findOne({email});
        if(!isUserExist)return res.status(404).json({message:"User does not exist"})
        const checkPassword=await bcrypt.compare(password,isUserExist.password);
        if(!checkPassword)return res.status(400).json({message:"Invalid Details"})
        
        const token=jwt.sign({email:isUserExist.email,id:isUserExist._id},'secret',{expiresIn:"3h"});
        res.status(200).json({result:isUserExist,token})
       
        

    } catch (error) {
        res.status(500).json({message:"something went wrong "})
        
    }
    

}


export const signup=async(req,res)=>{
    const {name,password,confirmPassword,email}=req.body;

    try {
        const isUserExist=await User.findOne({email});
        if(isUserExist)return res.status(404).json({message:"User already  exist"})
        if(password!==confirmPassword) return res.status(400).json({message:"Password not match"})

        const passwordHashed=await bcrypt.hash(password,12);


        const result=await User.create({name,email,password:passwordHashed})
        const token=jwt.sign({email:result.email,id:result._id},'secret',{expiresIn:"3h"});
        res.status(201).json({result,token})



        
    } catch (error) {
        res.status(500).json({message:"something went wrong "})
        console.log(error)
        
    }
    
}