import React, { useState } from "react";
import "./show.css";

// get restaurants list and number of restaurants per page
interface restuarantsProps {
  restaurants: any[];
  page: number;
  perPage: number;
  totalPages: number;
  loading: boolean;
}

// show searched restaurants list
const ShowSection: React.FC<restuarantsProps> = (props) => {
  var list = props.restaurants;
  // set the showing list
  if (props.restaurants && props.restaurants.length > props.perPage) {
    list = props.restaurants.slice(
      (props.page - 1) * props.perPage,
      props.page * props.perPage
    );
  }

  return (
    <div className="show-container">
      <div className="show-loading">
        <div
          className={`lds-dual-ring ${!props.loading && "hide-loading"}`}
        ></div>
      </div>
      <div className="show-page">
        Total <b>{props.totalPages}</b> pages (<b>{props.restaurants.length}</b>{" "}
        results)
      </div>
      {list.length > 0
        ? list.map((restaurant) => (
            <div key={restaurant.place_id} className="item">
              <label className="show-title">{restaurant.name}</label>
              <label className="show-rating">
                {[...Array(Math.floor(restaurant.rating))].map(
                  (item, index) => (
                    <label key={index}>&#9733;</label>
                  )
                )}{" "}
                {restaurant.rating} ratings ({restaurant.user_rating_total}{" "}
                users)
              </label>
              {restaurant.url ? (
                <div className="show-more">
                  <a target="_blank" href={restaurant.url}>
                    See more information
                  </a>
                </div>
              ) : (
                ""
              )}
            </div>
          ))
        : ""}
    </div>
  );
};

export default ShowSection;
