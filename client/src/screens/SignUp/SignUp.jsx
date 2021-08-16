import { register } from "../../services/users";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout.jsx";

function SignUp(props) {
  const history = useHistory();
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const onSignUp = async (e) => {
    e.preventDefault();
    const { setUser } = props;
    try {
      const user = await register(form);
      setUser(user);
      history.push("/posts");
    } catch (error) {
      console.error(error);
      setForm({
        email: "",
        username: "",
        password: "",
        isError: true,
        errorMsg: "Details Invalid",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">SIGN UP</button>;
    }
  };
  const { email, username, password } = form;

  return (
    <Layout user={props.user}>
      <div className="signup-form">
        <form onSubmit={onSignUp}>
          <input
            required
            type="text"
            name="email"
            value={email}
            placeholder="E-mail"
            onChange={handleChange}
          />
          <input
            required
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            required
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          />
          {renderError()}
        </form>
      </div>
    </Layout>
  );
}

export default SignUp;
