import React, { useState, useEffect } from "react";
import ReviewsDataService from "../../services/Reviews";
import { Link } from "react-router-dom";

const List = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    retrieveReviews();
  }, []);


  const retrieveReviews = () => {
    ReviewsDataService.getAll()
      .then(response => {
        setReviews(response.data);
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
        <h4>User List</h4>

        <ul className="list-group">
          {reviews &&
            reviews.map((review, index) => (
              <Link to={"/review/"+review.to_employee} className="nav-link">
				  {review.username} -> {review.averageRating}
			   </Link>
            ))}
        </ul>
      </div>
      
    </div>
  );
};

export default List;