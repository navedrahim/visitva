import { NavLink } from "react-router-dom";
import "./Nav.css"
import { useEffect, useState } from "react";

const Nav = ({ user }) => {
  const [visible, setVisible] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setVisible(true);
        setHamburger(false);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/add">
      Add Post
    </NavLink>
    <NavLink className="link" to="/sign-out">
      Sign Out
    </NavLink>
  </>
);

const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="link" to="/sign-in">
      Sign In
    </NavLink>
  </>
);

const alwaysOptions = (
  <>
    <NavLink className="link" to="/posts">
      Browse
    </NavLink>
  </>
);

  return (
    <>
      <nav>
        <NavLink className="logo" to="/">
          VisitVA
        </NavLink>
        <button
          className="hamburger" id="hamburger-button"
          onClick={() => setHamburger(!hamburger)}
        >
          <div className="hamburger-detail"></div>
          <div className="hamburger-detail"></div>
          <div className="hamburger-detail"></div>
        </button>
        <div className="nav">
          <div className="links">
          <h4>{user ? `Hello, ${user?.username}!`: null}</h4>{alwaysOptions}
            {user ? authenticatedOptions : unauthenticatedOptions}
          </div>
        </div>
      </nav>
      <div
        style={{
          display:
            (visible && window.innerWidth < 768) ||
            (hamburger && window.innerWidth < 768)
              ? "flex"
              : "none",
        }}
        className="hamburger-links"
      >
        <h4>{user ? `Hello, ${user?.username}!`: null}</h4>{alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div>
    </>
  );
};

export default Nav;
