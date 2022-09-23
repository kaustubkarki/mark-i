import Card from "./../../../assets/card_display.png";
import React from "react";
import "./card.css";

function card() {
  return (
    <div className="card_body">
      <div className="card_content">
        <img src={Card} alt="Avatar" className="image" />
        <div className="container">
          <h4>
            <b>Operating System </b>
          </h4>
          <p>
            AllSpark technology has the experienced and industry standard
            working professional
          </p>
          <button type="submit" className="button button1">
            Readmore
          </button>
        </div>
      </div>
    </div>
  );
}

export default card;
