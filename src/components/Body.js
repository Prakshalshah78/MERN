import { RestaurentCard } from "./RestuarantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  // takes 2 arguments
  // 1. call back fun, arrow fun
  // 2. Dependency array

  useEffect(() => {
    console.log("useEffect called"); // it will be called when your component re-renders
    // make api call
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("api");
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0044745&lng=72.55311549999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // convert to json
    const json = await data.json();
    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
    setResList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  console.log("body called");
  let [resList, setResList] = useState([]);
  let searchText;
  console.log(resList);

  if (resList.length == 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search-bar">
          <input
            type="text"
            onChange={(e) => {
              searchText = e.target.value;
              console.log(searchText);
            }}
          />
          <button
            className="btn-search"
            onClick={() => {
              // search rest card logic applies here
              const filteredSearchList = resList.filter((res) => {
                return res.info.name.includes(searchText);
              });
              setResList(filteredSearchList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic
            const filteredRes = resList.filter((res) => {
              return res.info.avgRating > 4;
            });
            // resList = filteredRes;
            setResList(filteredRes);
            console.log(filteredRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
