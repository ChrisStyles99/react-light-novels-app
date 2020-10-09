import React, { useEffect, useState } from 'react'

const Posts = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    getData();
  }, []);

  const getData = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    const slicedPosts = data.splice(0, 10);
    setPosts(slicedPosts);
  }

  return (
    <div className="row">
      <h1>Posts</h1>
      {posts.map(post => {
        return (
          <div className="card col s12 hoverable" key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  )
}

export default Posts;