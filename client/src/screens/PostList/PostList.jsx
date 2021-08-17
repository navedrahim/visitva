import { useState, useEffect } from "react";
import { getPosts } from "../../services/posts.js";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout.jsx";
import "./PostList.css"

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
    <Layout user={props.user}>
        <div className="missing-something">
          Can't find what you're looking for?
          <Link to={"/add"}>
            <button className="add-post-button">Add Post</button>
          </Link>
        </div>
      <div className="post-container">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <img className="picture" src={post.imageURL} alt={post.name} />
              <div className="post-name">{post.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default PostList;
