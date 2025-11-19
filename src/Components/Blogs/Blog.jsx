import React from 'react';

const Blog = ({blog}) => {
    // console.log(blog);
    const {id,cover,title,author_img,author,posted_date : date, reading_time : time,hashtags : tags} =blog;
    return (
      <div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src={cover}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Mark as read</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;