import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Blogs from "./Components/Blogs/Blogs";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="main-container text-center w-11/12 mx-auto flex mt-5">
        <div className="left-container w-[70%]">
          <Blogs></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h1 className="text-xl">Reading time: 0</h1>
          <h1 className="text-xl">Bookmarked count: 0</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
