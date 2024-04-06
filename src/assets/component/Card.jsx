// card.jsx
import React from "react";
import { cardData } from "../../data.js";
const Card = () => {
  return (
    <div className="container">
      <div className="row">
        {cardData.map((item, index) => (
          <div className="col-lg-4" key={index}>
            <div className="cards-content">
              <p className="card-icon">
                {" "}
                <i className={`bi ${item.iconClass}`}></i>
              </p>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
