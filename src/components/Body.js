import RestaurentCard from "./RestuarantCard";
import { mockRestaurants } from "./utils/Constants";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {mockRestaurants.restaurants.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
