import React, { useState } from 'react';
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleBookmark, handleMarkAsRead }) => {
  const {
    id,
    cover,
    title,
    author_img,
    author,
    posted_date: date,
    reading_time: time,
    hashtags: tags,
  } = blog;

  const [ReadMark,setReadMark]=useState(false);
  const [toggleBookMark,setToggleBookMark]=useState(false);
  const handleReadMark=()=>{
      setReadMark(true);
      
  }

const handleToggleBookMark=()=>{
  setToggleBookMark(true);
}
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={cover} alt="Shoes" />
        </figure>
        <div className="flex justify-between items-center">
          <div className="author flex space-x-3 mt-3 ml-3 items-center">
            <img className="w-10 rounded-full " src={author_img} alt="" />
            <h3 className="font-semibold text-gray-600">{author}</h3>
          </div>
          <div className="flex space-x-2 ">
            <h3 className="text-sm">{time} read</h3>
            <button
              disabled={(toggleBookMark, ReadMark)}
              onClick={() => {
                handleBookmark(blog);
                handleToggleBookMark();
              }}
            >
              {!toggleBookMark ? (
                <FaRegBookmark size={20} className="cursor-pointer mr-3" />
              ) : (
                <FaBookmark size={20} className="cursor-pointer mr-3" />
              )}
            </button>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button
              disabled={ReadMark}
              onClick={() => {
                handleMarkAsRead(blog);
                handleReadMark();
              }}
              className="btn btn-primary"
            >
              {ReadMark ? "Marked" : "Mark as read"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;