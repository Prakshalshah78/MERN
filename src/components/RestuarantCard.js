import { CDN_RES_IMG } from "./utils/Constants";
// React fun compo => javascript fun => props => javascript fun args
const RestaurentCard = (props) => {
  const { id, name, cuisines, avgRatingString, sla, cloudinaryImageId } =
    props.resData.info;
  return (
    <div
      className="res-card"
      id={id}
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        alt="res-card"
        src={CDN_RES_IMG + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h5>{cuisines ? cuisines?.join(", ") : "Default Restaurant Cuisines"}</h5>
      <h5>{avgRatingString} stars</h5>
      <h5>{sla.deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurentCard;
