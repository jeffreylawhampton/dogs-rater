import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import "../assets/scss/main.scss";
import getCurrentUser from "../services/getCurrentUser";

import About from "./layout/About";
import AuthenticatedRoute from "./authentication/AuthenticatedRoute.js";
import DogsList from "./layout/DogsList";
import DogShowPage from "./layout/DogShowPage";
import NewDogForm from "./layout/NewDogForm";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import UserProfile from "./layout/UserProfile";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser();
      setCurrentUser(user);
    } catch (err) {
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/" component={DogsList} />
        <Route exact path="/about" component={About} />
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
        <AuthenticatedRoute exact path="/dogs" component={NewDogForm} user={currentUser} />
        <AuthenticatedRoute exact path="/user-profile" component={UserProfile} user={currentUser} />
        <Route exact path="/dogs" component={DogsList} />
        <Route exact path="/dogs/:id">
          <DogShowPage user={currentUser} />
        </Route>
      </Switch>
    </Router>
  );
};

export default hot(App);
