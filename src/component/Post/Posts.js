import React, { useEffect, useState } from "react";




function Posts({item, editPost, editDelete}) {
  return (
    <div>
      <a href="#" class="block h-{200px} max-w-sm p-6 m-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-900 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 duration-300">
        <div className="flex flex-row justify-between">
          <p class="mb-2 text-2xl font-bold tracking-tight text-left text-gray-900 dark:text-white">{item.title}</p>
          <div className="flex">
            <svg onClick={(event) => editPost(item)} className="ml-2 h-5 w-5 text-white hover:text-blue-500 duration-300"  width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
            <svg onClick={(event) => editDelete(item)} className="ml-2 h-5 w-5 text-white hover:text-blue-500 duration-300"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
          </div>
        </div>
        <p class="font-normal text-gray-700 dark:text-gray-400">{item.content}</p>
        <p class="font-normal text-gray-300 dark:text-gray-400 text-right">-{item.author}</p>
      </a>
    </div>
  )
}

export default Posts;