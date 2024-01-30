// import logo from './logo.svg';
import './App.css';
import NavBar from './layout/navBar';
import Dashboard from './component/Dashboard/Dashboard';
import React, {useEffect} from "react";
import {PostService} from "./service/PostService.js";

const postService = new PostService();
function App() {
  useEffect(()=>{
    postService.getAllUsers().then(res=>{
      console.log(res, " result");
    },err=>{
      console.log(err);
    })
  })
  return (
    <div className="App">
      <NavBar/>
      <Dashboard/>
    </div>
  );
}

export default App;
