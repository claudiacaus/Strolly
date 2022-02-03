import React from "react";
import { useContext } from "react";
import { userContext } from "../../context/userContext";
import "../../styles/ReservedCard.css";

// this function is used to get the stroller type with title and image from the server
const ReservedCard = () => {
  const { currentUser } = useContext(userContext);
  const title = currentUser.activeOrder?.strollerType.type || null;
  const image =
    currentUser.activeOrder?.strollerType.images.stroller_imgs[0] || null;
  const price = currentUser.activeOrder?.strollerType.price.perMin || null;

  return (
    <div className="reserved-card">
      <div className="reserved-card-t-p">
        <h2 className="h2-card">{title}</h2>
        <p className="p-price">{price} € / Minute </p>
      </div>
      <div className="img-card-c">
        <img src={image} alt={title} className="img-card-c image" />
      </div>
    </div>
  );
};

export default ReservedCard;
