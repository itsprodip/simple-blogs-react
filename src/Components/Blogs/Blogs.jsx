import React, { useEffect } from 'react';

const Blogs = () => {
    
    useEffect(()=>{
        fetch('Blogs.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    
    return (
        <div>
            <h1>Hii</h1>
        </div>
    );
};

export default Blogs;