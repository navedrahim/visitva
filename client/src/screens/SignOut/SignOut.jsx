import { useEffect } from "react";
import { logout } from "../../services/users.js";
import { useHistory } from "react-router-dom";

function SignOut(props) {
  const { setUser } = props;
  const history = useHistory();

  useEffect(() => {
    const handleLogout = () => {
      logout();
      setUser(null);
      history.push("/");
    };
    handleLogout();
  }, [history, setUser]);
  return "";
}

export default SignOut;
