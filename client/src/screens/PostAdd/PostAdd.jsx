import { createPost } from "../../services/posts";
import { useState } from "react";
import { Redirect } from "react-router-dom";

const PostAdd = (props) => {
  const [post, setPost] = useState({
    imageURL: "",
    name: "",
    location: "",
    description: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const created = await createPost(post);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/posts`} />;
  }

  return (
    <form className="create-form" onSubmit={handleSubmit}>
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
  );
};

export default PostAdd;
