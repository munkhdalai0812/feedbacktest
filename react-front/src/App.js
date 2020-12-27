import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddUser from "./components/users/AddUser";
import User from "./components/users/User";
import UserList from "./components/users/List";
import ReviewList from "./components/reviews/List";
import Review from "./components/reviews/Show";
import Assign from "./components/reviews/Assign";
import EmployeeReview from "./components/reviews/EmployeeReview";

function App() {
  return (
	<div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/list"} className="nav-link">
              Users
            </Link>
			<Link to={"/reviews"} className="nav-link">
              Reviews
            </Link>
			<Link to={"/employeereview"} className="nav-link">
              Employee Review
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/list"]} component={UserList} />
          <Route exact path="/add" component={AddUser} />
		  <Route path="/users/:id" component={User} />
		  <Route path="/reviews" component={ReviewList} />
		  <Route path="/review/:id" component={Review} />
		  <Route path="/assign/:id" component={Assign} />
		  <Route path="/employeereview" component={EmployeeReview} />
        </Switch>
      </div>
    </div>
 );
}

export default App;
