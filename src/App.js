import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Home from './components/Home/Home';
import PostDetail from './components/Postdetail/PostDetail';


function App() {
  return (
    <Router>
      <Switch>
          <Route path="/home">
            <Home />  
          </Route>
          <Route path="/posts/:id">
            <PostDetail/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/*">
            <NoMatch />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
