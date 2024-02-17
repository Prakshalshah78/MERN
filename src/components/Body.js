import { RestaurentCard } from "./RestuarantCard";

import { useState } from "react";
import { mockRestaurants } from "./utils/Constants";

const Body = () => {
  // normal JS variable
  // let resList = [
  //   {
  //     info: {
  //       id: "50180",
  //       name: "McDoqweqw eqsadsadasas",
  //       cloudinaryImageId: "03501c33ecb3a3105124441e541e6fe4",
  //       locality: "YASH PINNACLE",
  //       areaName: "Paldi",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
  //       avgRating: 4.4,
  //       parentId: "630",
  //       avgRatingString: "4.4",
  //       totalRatingsString: "10K+",
  //       sla: {
  //         deliveryTime: 21,
  //         lastMileTravel: 0.7,
  //         serviceability: "SERVICEABLE",
  //         slaString: "21 mins",
  //         lastMileTravelString: "0.7 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "50181",
  //       name: "Horizon",
  //       cloudinaryImageId: "03501c33ecb3a3105124441e541e6fe4",
  //       locality: "YASH PINNACLE",
  //       areaName: "Paldi",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
  //       avgRating: 4.8,
  //       parentId: "630",
  //       avgRatingString: "4.4",
  //       totalRatingsString: "10K+",
  //       sla: {
  //         deliveryTime: 21,
  //         lastMileTravel: 0.7,
  //         serviceability: "SERVICEABLE",
  //         slaString: "21 mins",
  //         lastMileTravelString: "0.7 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //     },
  //   },
  // ];

  // resList = [];
  // resList = null;

  // state variables
  // [initializedValue, aabc] = useState
  let [resList, setResList] = useState(mockRestaurants);
  console.log(resList);
  // resList = resData[0];
  // setResList = resData[1];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic
            const filteredRes = resList.filter((res) => {
              return res.info.avgRating > 4.5;
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
