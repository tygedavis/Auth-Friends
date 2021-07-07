import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

//components
import FriendsList from './components/FriendsList';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to='/login'>Login</Link>
          <Link to='friendslist'>Friends</Link>
        </div>
        <Switch>
          <PrivateRoute path="/friendslist" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>        
      </div>
    </Router>
  );
}

export default App;
