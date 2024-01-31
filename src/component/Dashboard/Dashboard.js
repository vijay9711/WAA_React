import React, { useState, useEffect, useRef } from "react";
import Posts from "../Post/Posts";
import AddPost from "../AddPost/AddPost";
import PostService from "../../service/PostService";


function Dashboard() {
  const childRef = useRef();
  const postService = new PostService();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPost();
  }, [])
  const addOrEditPost = (event) => {
    postService.addPost(event).then((res)=>{
      console.log(res, " data added ");
      getPost();
    }).catch(e=>{
      console.log(e);
    })
  }
  const editPost = (event) => {
    console.log("edit post ",event);
    let editData = posts.find(x => x.id == event.id);
    if(editData != null){
      // AddPost.loadData(editData);
    }
  }
  const deletePost = (event) => {
    console.log("delet postt",event);
    postService.deletePost(event.id).then(res=>{
      console.log(res);
      getPost();
    }).catch(e=>{
      console.log(e);
    })
  }
  const getPost = () => {
    postService.getAllPost().then(res=>{
      console.log(res, "post");
      if(res.data){
        setPosts(res.data);
      }
    }).catch(e=>{
      console.log(e);
    });
    // setPosts(data);
    console.log(posts)
  }
  return (
    <>
      <div className="grid grid-cols-4 flex w-screen h-auto items-center justify-center">
        {posts.map((item,i) => {
          return (
            <Posts key={i} item={item} editPost={(event)=>editPost(event)} deletePost={(event)=>deletePost(event)}/>
          )
        })}
      </div>
      <AddPost postData={(event)=>addOrEditPost(event)}  />
    </>
  )
}

export default Dashboard;