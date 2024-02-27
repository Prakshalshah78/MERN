import { Link } from "react-router-dom";
import { RestaurentCard } from "./RestuarantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  // takes 2 arguments
  // 1. call back fun, arrow fun
  // 2. Dependency array

  // Empty dependency array [] => component loads => useEffect called on initial render only
  // Don't specify dependency array => component loads => on every render of your comp, useEffect called

  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // make api call
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0044745&lng=72.55311549999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // convert to json
    const json = await data.json();
    setResList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredResList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

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
              setSearchText(e.target.value);
            }}
          />
          <button
            className="btn-search"
            onClick={() => {
              // search rest card logic applies here
              const filteredSearchList = resList.filter((res) => {
                return res.info.name.includes(searchText);
              });
              setFilteredResList(filteredSearchList);
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
            setFilteredResList(filteredRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredResList.map((restaurant) => (
          <Link to={"/restuarantmenu/" + restaurant.info.id}>
            <RestaurentCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
