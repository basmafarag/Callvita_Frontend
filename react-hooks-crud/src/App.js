import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTask from "./components/AddTask";
import Task from "./components/Task";
import TasksList from "./components/TasksList";

  function App() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/tasks" className="navbar-brand">
              bezKoder
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/tasks"} className="nav-link">
                  Tasks
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add
                </Link>
              </li>
            </div>
          </nav>
  
          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/tasks"]} component={TasksList} />
              <Route exact path="/add" component={AddTask} />
              <Route path="/tutorials/:id" component={Task} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  
}

export default App;