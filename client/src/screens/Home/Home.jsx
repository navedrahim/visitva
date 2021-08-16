import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout.jsx";

function Home(props) {
  return (
    <Layout user={props.user}>
    <header className="home-header">
      <div className="home-image-container">
        <img src="https://i.imgur.com/dKzMgAV.jpg" alt="beach" />
      </div>
      <div className="home-header-text">
        <h2>Welcome to VisitVA. Here you can browse information on Virginia's top
        attractions, and also make posts of your own.</h2>
        <Link to="/posts">
          <button className="home-button">Browse Attractions</button>
        </Link>
      </div>
    </header>
    </Layout>
  )
}

export default Home;