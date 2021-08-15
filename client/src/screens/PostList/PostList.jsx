import { useState, useEffect } from "react";
import { getPosts } from "../../services/posts.js";
import { Link } from "react-router-dom";

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
      <div className="missing-something">
        Can't find what you're looking for?
        <Link to={"/add"}>
        <button className="add-post-button">Add Post</button>
        </Link>
      </div>
      {posts.map((post) => (
        <div className="post-card" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <img className="picture" src={post.imageURL} alt={post.name} />
            <div className="post-name">{post.name}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PostList;
