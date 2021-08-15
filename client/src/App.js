import './App.css';
import PostList from './screens/PostList/PostList';
import PostDetail from './screens/PostDetail/PostDetail';
import Home from './screens/Home/Home';
import PostAdd from './screens/PostAdd/PostAdd';
import PostEdit from './screens/PostEdit/PostEdit';
import { verify } from "./services/users.js";
import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verify()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/posts">
          <PostList/>
        </Route>
        <Route exact path="/posts/:id">
          <PostDetail/>
        </Route>
        <Route exact path="/add">
          { user ? <PostAdd user={user}/> : <Redirect to="/sign-up" />}
        </Route>
        <Route exact path="/posts/:id/edit">
          { user ? <PostEdit user={user}/> : <Redirect to="/sign-up" />}
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
