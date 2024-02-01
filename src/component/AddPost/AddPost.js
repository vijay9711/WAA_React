import React, { useState, useImperativeHandle, useContext, createContext, forwardRef, createRef } from "react";

const ThemeContext = createContext(null);
const AddPost = forwardRef(function ({postData, editData},ref) {
  const addPostRef = createRef();
  const [form, setForm] = useState({
    title:"",
    content:"",
    author:"",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const data = useContext(ThemeContext);

  useImperativeHandle(ref, () => ({
    childMethod(event) {
      childMethod(event);
    },

    clearForm() {
      clearForm();
    }
  }))
  const clearForm = () => {
    setForm({
      title:"",
      content:"",
      author:"",
    });
    setIsFormValid(false);
  }
  const childMethod = (event) => {
    console.log('call me', event);
    setForm(event);
    setIsFormValid(true);
  }
  const handleEvent = (event) => {
    const { name, value } = event.target;
    setForm({ ...form , [name]: event.target.value });
    if(form.title == "" || form.author == "" || form.content == ""){
      setIsFormValid(false);
    }else{
      setIsFormValid(true);
    }
    console.log(form, isFormValid);
  };
  const addOrEditPost = () => {
      // if(isFormValid == true){
        postData(form);
      // }
  }
  return (
    <div className="grid items-center grid-cols-1 mt-5">
      <div className="shadow-lg w-full max-w-md mx-auto">
        <div className="p-9 rounded shadow-lg dark:bg-gray-900">
          <p className="text-white dark:text-white">{editData != null ? 'Edit Post' : 'Add Post'}</p>
          <div class="relative z-0 w-full mb-7 text-left">
            <input type="text" onChange={(event) => handleEvent(event, 'title')} value={form.title} name="title" id="title" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
            <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
          </div>
          <div class="relative z-0 w-full mb-7 text-left">
            <input type="text" onChange={(event) => handleEvent(event, 'content')} value={form.content}  name="content" id="content" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
            <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Content</label>
          </div>
          <div class="relative z-0 w-full mb-7 text-left">
            <input type="text" onChange={(event) => handleEvent(event, 'author')} value={form.author}  name="author" id="author" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
            <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Author</label>
          </div>
          <div className="w-full flex">
            <button type="button" onClick={()=>{addOrEditPost()}} class="text-blue-700 ml-auto outline-none hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 duration-300">Submit</button>
            <button type="button" class="text-gray-900 outline-none hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 duration-300">Cancel</button>
          </div>
        </div>
      </div>

    </div>
  )
})

export default AddPost;