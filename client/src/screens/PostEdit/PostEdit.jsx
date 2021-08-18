import { editPost, getPost } from "../../services/posts";
import { useParams, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import "./PostEdit.css";

const PostEdit = (props) => {
  const { id } = useParams();
  const [post, setPost] = useState({
    imageURL: "",
    name: "",
    location: "",
    description: "",
  });

  const [isUpdated, setIsUpdated] = useState(false);
  useEffect(() => {
    const fetchPost = async () => {
      const postToEdit = await getPost(id);
      setPost(postToEdit);
    };
    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const editedPost = await editPost(id, post);
    if (editedPost) {
      setIsUpdated(true);
    }
  };

  if (isUpdated) {
    return <Redirect to={`/posts/${id}`} />;
  }

  return (
    <Layout user={props.user}>
      <div className="post-edit">
        <img class="edit-image" src={post.imageURL} alt={post.name} />
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="input-image"
            placeholder="Image URL"
            value={post.imageURL}
            name="imageURL"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-name"
            placeholder="Name"
            value={post.name}
            name="name"
            required
            onChange={handleChange}
          />
          <input
            className="input-location"
            placeholder="Location"
            value={post.location}
            name="location"
            required
            onChange={handleChange}
          />
          <input
            className="input-description"
            placeholder="Description"
            value={post.description}
            name="description"
            required
            onChange={handleChange}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default PostEdit;
