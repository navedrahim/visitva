import { NavLink } from "react-router-dom";
// import { useEffect, useState } from "react";

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

const Nav = ({ user }) => {
  return (
    <>
      <nav>
        <NavLink className="logo" to="/">
          VisitVA
        </NavLink>
        <div className="nav">
          <div className="links">
            {alwaysOptions}
            {user ? authenticatedOptions : unauthenticatedOptions}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
