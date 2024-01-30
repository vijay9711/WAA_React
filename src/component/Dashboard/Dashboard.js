import React, { useState, useEffect } from "react";
import Posts from "../Post/Posts";
import AddPost from "../AddPost/AddPost";


function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPost();
  }, [])
  const addOrEditPost = (event) => {
    console.log("Post ", event);
  }
  const getPost = () => {
    let data = [
      {
        id:1,
        title: "LaLa land",
        content: "all cartoon character play in concert stage",
        author: "Akon Jim"
      },
      {
        id:2,
        title: "Marvel",
        content: "Iron man and Spider-man will visit the park.",
        author: "Stan Lee"
      },
      {
        id:3,
        title: "Civil war",
        content: "Massive fight scene in Florida airport.",
        author: "Rim Coop"
      }
    ]
    setPosts(data);
    console.log(posts)
  }
  return (
    <>
      <div className="grid grid-cols-4 flex w-screen h-auto items-center justify-center">
        {posts.map(item => {
          return (
            <Posts item={item} />
          )
        })}
      </div>
      <AddPost addOrEditPost={(event)=>addOrEditPost(event)}/>
    </>
  )
}

export default Dashboard;