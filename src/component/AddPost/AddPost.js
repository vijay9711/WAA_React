import React, { useState } from "react";

function AddPost() {
  const [form, setForm] = useState({
    title:"",
    content:"",
    author:"",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const handleEvent = (event, name) =>{
    let tForm = form;
    tForm[name] = event.target.value;
    if(tForm.title != "" && tForm.author != "" && tForm.content != ""){
      setIsFormValid(true);
    }else{
      setIsFormValid(false);
    }
    console.log(tForm);
    setForm(tForm);
  }
  const addOrEditPost = () => {
    if(isFormValid){
      this.props.addOrEditPost(form);
    }
  }
  return (
    <div className="grid items-center grid-cols-1 mt-5">
      <div className="rounded shadow-lg w-full max-w-md mx-auto">
        <div className="p-9">
          <div class="relative z-0 w-full mb-7 text-left">
            <input type="title" onChange={(event) => handleEvent(event, 'title')} value={form.title} name="floating_title" id="floating_title" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_title" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
          </div>
          <div class="relative z-0 w-full mb-7 text-left">
            <input type="content" onChange={(event) => handleEvent(event, 'content')} value={form.content}  name="floating_content" id="floating_content" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_content" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Content</label>
          </div>
          <div class="relative z-0 w-full mb-7 text-left">
            <input type="author" onChange={(event) => handleEvent(event, 'author')} value={form.author}  name="floating_author" id="floating_author" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_author" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Author</label>
          </div>
          <div className="w-full flex">
            <button type="button" onClick={()=>{addOrEditPost()}} class="text-blue-700 ml-auto outline-none hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 duration-300">Submit</button>
            <button type="button" class="text-gray-900 outline-none hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 duration-300">Cancel</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AddPost;