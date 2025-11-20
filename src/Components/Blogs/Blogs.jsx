import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({ handleBookmark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Blogs: {blogs.length}</h1>
      <div className="all-blogs grid grid-cols-2">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleBookmark={handleBookmark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
