import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import axios from "axios";
import { API_URL } from "../../../../configs/environments";
import "./search.css";

// pass function from parent component
interface restuarantsFnProps {
  setRestaurants: ([]) => void;
  setLoading: (arg0: boolean) => void;
}

// handle search
const SearchSection: React.FC<restuarantsFnProps> = (props) => {
  const [lat, setLat] = useState<number>();
  const [long, setLong] = useState<number>();

  const [loading, setIsLoading] = useState<boolean>(false);

  // handle input text changed and enter
  const [inputText, setInputText] = useState("Bang sue");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") search();
  };

  // get geolocation for API
  navigator.geolocation.getCurrentPosition(showPosition);
  function showPosition(position: any) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  }

  // do search, call API
  function search() {
    if (!loading) {
      setIsLoading(true);
      props.setLoading(true);
      // set body parameter of API
      // lat: latitude
      // long: longitude
      // keyword: searched text
      if (inputText) var payload = { lat: lat, long: long, keyword: inputText };
      else var payload = { lat: lat, long: long, keyword: " " };
      axios
        .post(`${API_URL}/restaurants/get_nearby`, payload)
        .then((response) => {
          if (response) {
            props.setRestaurants(response.data);
            props.setLoading(false);
            setIsLoading(false);
          } else props.setRestaurants([]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={inputText}
      />
      <button
        className={`search-btn ${loading && "btn-disabled"}`}
        onClick={search}
        value={"Bang sue"}
      >
        &#128269;
      </button>
    </div>
  );
};

export default SearchSection;
