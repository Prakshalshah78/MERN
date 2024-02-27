import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESMENU_API, mockResMenu } from "./utils/Constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resMenu, setResMenu] = useState([]);
  const [resName, setResName] = useState("");
  useEffect(() => {
    fetchResMenu();
  }, []);

  //const resId = 50180;
  const fetchResMenu = async () => {
    const menuRes = await fetch(RESMENU_API + resId);
    const jsonMenu = await menuRes.json();
    const cards =
      jsonMenu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards;
    //resName = jsonMenu.data.cards[0].card.card.text;
    console.log(jsonMenu.data.cards[0].card.card.text);
    setResName(jsonMenu.data.cards[0].card.card.text);
    console.log(cards);
    if (cards) {
      setResMenu(cards);
    } else {
      console.log("inside if", mockResMenu);
      setResMenu(mockResMenu);
    }
  };

  // checking undefined and null

  if (resMenu.length == 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <h1>Menu : {resName} </h1>
      <h3>
        <ul>
          {resMenu.map((menu) => (
            <li key={menu.card.info.id}>
              {menu?.card?.info?.name} - Rs.{" "}
              {menu.card.info.defaultPrice
                ? menu.card.info.defaultPrice / 100
                : menu.card.info.price / 100}
            </li>
          ))}
        </ul>
      </h3>
    </div>
  );
};

export default RestaurantMenu;
