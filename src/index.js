import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./About";
import Blogs from "./Blogs";
import Blog from "./Blog";
import BugHunts from "./BugHunts";
import BugHunt from "./BugHunt";
import Projects from "./Projects";
import Project from "./Project";
import KetoRecipes from "./KetoRecipes";
import KetoRecipe from "./KetoRecipe";
import Nav from "./Nav";

import reportWebVitals from "./reportWebVitals";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL} component={App} />
          <Nav>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/about`}
              component={About}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blogs`}
              component={Blogs}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blogs/:id`}
              component={Blog}
            />
            {/* <Route exact path='/bugs' component={BugHunts} />
          <Route exact path='/bugs/:id' component={BugHunt} /> */}
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/projects`}
              component={Projects}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/projects/:id`}
              component={Project}
            />
            {/* <Route exact path='/ketorecipes' component={KetoRecipes} />
          <Route exact path='/ketorecipes/:id' component={KetoRecipe} /> */}
          </Nav>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
