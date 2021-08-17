import "./Layout.css";
import Nav from "../Nav/Nav.jsx";

const Layout = (props) => (
  <div className="layout">
    <Nav user={props.user}/>
    <div className="layout-children">
      {props.children}
    </div>
  </div>
);

export default Layout;