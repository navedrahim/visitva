import './App.css';
import PostList from './screens/PostList/PostList';
import { Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/posts">
          <PostList/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
