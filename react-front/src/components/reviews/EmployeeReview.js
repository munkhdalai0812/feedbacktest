import React, { useState, useEffect } from "react";
import UsersDataService from "../../services/Users";
import ReviewsDataService from "../../services/Reviews";
import { Link } from "react-router-dom";

const EmployeeReview = () => {
  const [users, setUsers] = useState([]);
  const [is_logged, setLogged] = useState(false);
  const [logged_user, setLoggedUser] = useState("");
  const [assigned_users, setAssignedUsers] = useState([]);

  useEffect(() => {
    retrieveUsers();
  }, []);


  const retrieveUsers = () => {
    UsersDataService.getAll()
      .then(response => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  
  const handleInputChange = event => {
    const { id, value } = event.target;
	setLoggedUser(value);
  };
  
  const login = () => {
    setLogged(true);
	ReviewsDataService.getAssignedUsers(logged_user)
      .then(response => {
        setAssignedUsers(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };


  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">

        </div>
      </div>
	  {!is_logged ? (
      <div className="col-md-6">
	   
        <h4>Login</h4>

        <select onChange={handleInputChange} id="user-id">
		{users.map(user => (
		  <option key={user.id} value={user.id}>
			{user.name}
		  </option>
		))}
        </select>
		<button onClick={login} className="btn btn-success">
		  Login
	    </button>
	   
      </div>
	  ) : ( 
		<div className="col-md-6">
		{assigned_users &&
            assigned_users.map((user, index) => (
			<div>
			  <div className="form-group">
				<label htmlFor="name">{user.id}</label>
				<input
				  type="text"
				  className="form-control"
				  id="name"
				  name="name"
				/>
			  </div>

			  <button className="btn btn-success">
				Submit
			  </button>
			</div>
			 ))}
		</div>
	  )}
      
    </div>
  );
};

export default EmployeeReview;