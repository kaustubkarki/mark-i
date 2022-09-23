import React from "react";
import "./social.css";
import foto from "../../../assets/Social-Media-Presence.png";

const Social = () => {
  return (
    <div className="mainSocial">
      <div className="mainSocial_image">
        <img src={foto} alt=" foto" />
      </div>
      <div className="mainSocial_text">
        <div className="mainSocial_text-heading">
          <h1>Our Social Presence</h1>
        </div>
        <div className="mainSocial_text-element_dividor" />
        <div className="mainSocial_text-p">
          <p>
            {" "}
            We have vibrant experts with years of experiences in Digital health
            Implementation, health informatics, Information security and
            opensource Development.{" "}
          </p>
        </div>
        <div className="mainSocial_icons"> icons are here</div>
      </div>
    </div>
  );
};

export default Social;
