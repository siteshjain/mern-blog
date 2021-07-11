import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Comment from './Comment';
export const Read = ({currentId,setCurrentId}) => {
  const history=useHistory();
    const post1=useSelector((state)=>currentId?state.posts.find((p)=>p._id===currentId):null)

    const editPost=()=>{
      let path=`/edit/${post1._id}`
      history.push(path);
    }
   const handleSubmit=()=>{

    let path=`/`;
    history.push(path)

   }
   const user=JSON.parse(localStorage.getItem('profile'))

    return (
        <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-4 mt-3">
            <img src={post1.selectedFile} alt="img" width="100%" height="500px"></img>
            <button type="button" onClick={handleSubmit} className="btn btn-info mt-3 ml-5 ">All Posts</button>
            {
              (user?.result?._id===post1?.creator)&&
              <button type="button" onClick={editPost} className="btn btn-success mt-3 ml-5 ">Edit</button>
            }
          
     
          </div>
          <div className="col-md-8">
          <h2 className="title">{post1.title}</h2>
          <ul className="list-group">
          <li className="list-group-item creator"><strong>Creator: </strong> {post1.name}</li>
       
          <li className="list-group-item"><p><strong>Message: </strong>{post1.message}</p></li>
        
          </ul>
          <Comment post1={post1}></Comment>
          </div>
        </div>

  
            
        </div>
    )
}

export default Read