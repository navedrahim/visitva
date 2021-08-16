import { getPost, deletePost } from "../../services/posts";
// import { getComments } from "../../services/comments";
import { useState, useEffect } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import Layout from "../../components/Layout/Layout.jsx";

function PostDetail(props) {
  const [post, setPost] = useState({});
  // const [comments, setComments] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
    };
    fetchPost();
  }, [id]);

  // useEffect(() => {
  //   const fetchComments = async () => {
  //     const comments = await getComments(id);
  //     setComments(comments);
  //   };
  //   fetchComments();
  // }, [id]);

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
        <div className="comment-container">
          {post.comments?.map((comment) => (
            <div key={comment.id} className="comment">
              {comment.content}-
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default PostDetail;
