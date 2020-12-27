import React, { useState, useEffect } from "react";
import UsersDataService from "../../services/Users";
import ReviewsDataService from "../../services/Reviews";
import { Link } from "react-router-dom";

const Assign = props => {
  const [users, setUsers] = useState([]);
  let selected_user = "";

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
    selected_user = value;
  };
  
  const saveAssign = () => {
	let to_employee_id = props.match.params.id
    var data = {
      to_employee: to_employee_id,
	  from_employee: selected_user
    };

    ReviewsDataService.assignUserCreate(data)
      .then(response => {
        console.log(response.data);
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
      <div className="col-md-6">
        <h4>Assign User</h4>

        <select onChange={handleInputChange} id="user-id">
		{users.map(user => (
		  <option key={user.id} value={user.id}>
			{user.name}
		  </option>
		))}
        </select>
		<button onClick={saveAssign} className="btn btn-success">
		  Submit
	    </button>
      </div>
      
    </div>
  );
};

export default Assign;