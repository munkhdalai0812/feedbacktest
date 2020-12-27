import React, { useState, useEffect } from "react";
import ReviewsDataService from "../../services/Reviews";
import { Link } from "react-router-dom";

const Review = props => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReview(props.match.params.id);
  }, [props.match.params.id]);


  const getReview = id => {
    ReviewsDataService.get(id)
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
              <li>
				  {review.username} -> {review.averageRating}
			  </li>
            ))}
        </ul>
      </div>
      
    </div>
  );
};

export default Review;