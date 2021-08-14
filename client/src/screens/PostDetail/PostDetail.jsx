import { getPost } from "../../services/posts";
import { getComments } from "../../services/comments";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PostDetail(props) {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
    };
    fetchPost();
  }, [id]);

  useEffect(() => {
    const fetchComments = async () => {
      const comments = await getComments(id);
      setComments(comments);
    };
    fetchComments();
  }, [id]);

  return (
    <div className="post-detail-container">
      <img className="post-detail-image" src={post.imageURL} alt={post.name} />
      <div className="detail">
        <div className="post-name">{post.name}</div>
        <div className="post-location">{post.location}</div>
        <div className="post-description">{post.description}</div>
      </div>
    </div>
  );
}

export default PostDetail;
