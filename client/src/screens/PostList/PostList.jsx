import { useState, useEffect } from "react";
import { getPosts } from "../../services/posts.js";

function PostList(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="post-container">
      {posts.map((post) => (
        <div className="post-card" key={post.id}>
          <img className="picture" src={post.imageURL} alt={post.name} />
          <div className="post-name">{post.name}</div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
