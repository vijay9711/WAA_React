import React, { useState, useEffect, useRef, createRef, createContext } from "react";
import Posts from "../Post/Posts";
import AddPost from "../AddPost/AddPost";
import PostService from "../../service/PostService";
import User from "../../container/user/user";
import UserService from "../../service/UserService";

const ThemeContext = createContext(null);
const postService = new PostService();
const userService = new UserService();
function Dashboard() {
  const childRef = createRef();
  const [selectEditPost, setSelectEditPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    getPost();
    getUsers();
  }, [])
  const addOrEditPost = (event) => {
    if (event.title == "" || event.author == "" || event.content == "") {
      setAlert(true);
      setTimeout(() => { setAlert(false) }, 3000);
    } else {
      if (event.id) {
        console.log("will update", event);
        postService.updatePost(event).then((res) => {
          console.log(res, " data added ");
          getPost();
        }).catch(e => {
          console.log(e);
        })
      } else {
        postService.addPost(event).then((res) => {
          console.log(res, " data added ");
          getPost();
        }).catch(e => {
          console.log(e);
        })
      }
    }


  }
  const editPost = (event) => {
    console.log("edit post ", event);
    let editData = posts.find(x => x.id == event.id);
    if (editData != null) {
      setSelectEditPost(event);
      childRef.current.childMethod(event);
    }
  }
  const deletePost = (event) => {
    console.log("delet postt", event);
    postService.deletePost(event.id).then(res => {
      console.log(res);
      getPost();
    }).catch(e => {
      console.log(e);
    })
  }
  const getUsers = () => {
    userService.getAllUser().then(res=>{
      console.log(res);
      if(res.data){
        setUsers(res.data);
      }
    }).catch(e=>{
      console.log(e);
    })
  }
  const getPost = () => {
    postService.getAllPost().then(res => {
      console.log(res, "post");
      if (res.data) {
        setPosts(res.data);
      }
    }).catch(e => {
      console.log(e);
    });
    console.log(posts);
  }
  return (
    <>
      <ThemeContext.Provider value={selectEditPost}>
        {
          alert ? <div className={" bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"} role="alert">
            <strong className="font-bold">I guess you missed something! </strong>
            <span className="block sm:inline">Please fill all the fields in form!</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
            </span>
          </div> : null
        }
        <div className="w-screen flex justify-items-end">
          <button className="bg-black text-white w-[200px] my-3 ml-auto mr-3 p-2 rounded-md" onClick={() => { childRef.current.clearForm() }}>
            Add Post
            <span className="font-mono text-xl mt-1"> + </span>
          </button>
        </div>
        {/* <div className="w-screen m-4 flex flex-wrap">
            {
              users.map(user=>{
                return (
                  <User className="" />
                )
              })
            }
        </div> */}

        <div className="grid grid-cols-4 flex w-screen h-auto items-center justify-center">
          {posts.map((item, i) => {
            return (
              <Posts key={i} item={item} editPost={(event) => editPost(event)} deletePost={(event) => deletePost(event)} />
            )
          })}
        </div>
        <AddPost ref={childRef} postData={(event) => addOrEditPost(event)} editData={selectEditPost} />
      </ThemeContext.Provider>
    </>
  )
}

export default Dashboard;