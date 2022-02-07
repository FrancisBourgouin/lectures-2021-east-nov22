import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
    .get("/api/authors/1/posts")
    .then(res => setPosts(res.data))
    .catch(() => setPosts([]))

  },[])

  const newPost = () => {
    axios
    .post("/api/authors/1/posts", {title:"Wiggle", content:"Wiggle wiggle"})
    .then(res => setPosts([...posts, res.data]))
  }

  const parsedPosts = posts.map(post => <p>{post.content}</p>)
  return (
    <div className="App">
      <button onClick={newPost}>NEW POST</button>
      {parsedPosts}
    </div>
  );
}

export default App;
