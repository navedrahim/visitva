import { getPost, deletePost } from "../../services/posts";
import { getComments } from "../../services/comments";
import { createComment } from "../../services/comments";
import { useState, useEffect } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import Layout from "../../components/Layout/Layout.jsx";

function PostDetail(props) {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    content: "",
    user_id: "",
    post_id: "",
  });
  const [deleted, setDeleted] = useState(false);
  const [isCreated, setCreated] = useState(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewComment({
      ...newComment,
      [name]: value,
      user_id: props.user.id,
      post_id: post.id,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const created = await createComment(newComment);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/posts/${id}`} />;
  }


  const handleDelete = async () => {
    await deletePost(post.id);
    setDeleted(true);
  };

  if (deleted) {
    return <Redirect to={"/posts"} />;
  }

  return (
    <Layout user={props.user}>
      <div className="post-detail-container">
        <img
          className="post-detail-image"
          src={post.imageURL}
          alt={post.name}
        />
        <div className="detail">
          <div className="post-name">{post.name}</div>
          <div className="post-location">{post.location}</div>
          <div className="post-description">{post.description}</div>
        </div>
        <div className="button-container">
          <Link to={`/posts/${post.id}/edit`}>
            <button className="edit-button">Edit</button>
          </Link>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
        <form className="comment-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="content"
            placeholder="Comment"
            value={newComment.content}
            onChange={handleChange}
          />
          <button type="submit" className="submit-button">
          Submit
        </button>
        </form>
        <div className="comment-container">
          {post.comments?.map((comment) => (
            <div key={comment.id} className="comment">
              {comment.content}-{comment.user}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default PostDetail;
