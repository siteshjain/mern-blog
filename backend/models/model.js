import mongoose from 'mongoose';

const schema=new mongoose.Schema({
    title:String,
    message:String,
    creator:String,
   name:String,
    selectedFile:String,
    likes:{
        type:[String],
        default:[]
    },
    comments:{
        type:[String],
        default:[]
    },
   
    createdAt:{
        type:Date,
        default:new Date()
    }
})

const PostMessage=mongoose.model('PostMessage',schema);

export default PostMessage