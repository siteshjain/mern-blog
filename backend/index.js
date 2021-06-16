import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import postRoutes from './routes/router.js'
import userRoutes from './routes/userRoutes.js'
const app=express();

dotenv.config();


app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

app.get('/',(req,res)=>{
    res.send('running');
})
app.use('/users',userRoutes);
app.use('/posts',postRoutes);


const PORT=process.env.PORT||5000;

mongoose.connect(process.env.CONNECTION_URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
   
}).then(()=>{
    console.log('suuccefull')
}).catch((e)=>{
    console.log('error');
})

app.listen(PORT,()=>{
    console.log('server is running');
})
// if(process.env.NODE_ENV==='production'){
//     app.use(express.static("frontend/build"))
// }