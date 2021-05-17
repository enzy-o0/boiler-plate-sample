import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import MainPage from './components/views/Main/Main'
import SignInPage from './components/views/Login/SignIn'
import SignUpPage from './components/views/Login/SignUp'
import NavBar from './components/utils/NavBar/Navbar'
import Auth from './hoc/auth'

function App() {
  return (
    <Router>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Auth(MainPage, null)} />
          <Route exact path="/signIn" component={Auth(SignInPage, false)} />
          <Route exact path="/signUp" component={Auth(SignUpPage, false)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
