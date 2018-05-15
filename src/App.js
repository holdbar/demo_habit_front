import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Habits from './Habits';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/">Habits</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          
          <hr/>

          <Route exact path="/" component={Habits}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </div>
      </Router>

    );
  }
}

export default App;
