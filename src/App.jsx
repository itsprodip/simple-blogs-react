import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Blogs from "./Components/Blogs/Blogs";
import { HiH3 } from "react-icons/hi2";
const App = () => {
  const [bookmarked,setBookmarked]=useState([]);
  const [readTime,setReadTime]=useState(0);


  const handleBookmark=(blog)=>{
    setBookmarked([...bookmarked,blog]);
  }
 
  const handleMarkAsRead=(blog)=>{
   const time = parseInt(blog.reading_time);
   setReadTime(time+parseInt(readTime));
   handleRemoveFromBookmark(blog.id);
  }

  const handleRemoveFromBookmark=(id)=>{
    const remainningBoomark=bookmarked.filter(item=>item.id!==id)
    setBookmarked(remainningBoomark);
  }
  return (
    <div>
      <Navbar></Navbar>

      <div className="main-container text-center w-11/12 mx-auto flex mt-5">
        <div className="left-container w-[70%]">
          <Blogs
            handleBookmark={handleBookmark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h1 className="text-xl">Reading time: {readTime}</h1>
          <h1 className="text-xl ">Bookmarked count: {bookmarked.length}</h1>
          {bookmarked.map((blog) => (
            <h3 key={blog.id} className="text space-y-5 font-semibold">{blog.title}</h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
