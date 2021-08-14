import './App.css';
import PostList from './screens/PostList/PostList';
import PostDetail from './screens/PostDetail/PostDetail';
import { Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/posts">
          <PostList/>
        </Route>
        <Route exact path="/posts/:id">
          <PostDetail/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
