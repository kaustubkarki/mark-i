import React from "react";
import "./flexBoard.css";
import bahmni from "../../../assets/bahmni.png";

const FlexBoard = () => {
  return (
    <div className="mainFlex">
      <div className="mainFlex_text">
        <h1>We deliver Bahmni on the cloud</h1>
        <p>
          goBahmni is a hosted solution for having your dedicated instance of
          Bahmni on the cloud.
        </p>
        <p>
          Bahmni is a highly configurable and user-friendly Hospital Information
          System for your clinic or hospital.
        </p>
        <div className="mainFlex_text-button">
          <a href="https://www.bahmni.org">
            <button type="link">Know more about bahmni</button>
          </a>
        </div>
      </div>
      <div className="mainFlex_image">
        <img src={bahmni} alt="foto" />
      </div>
    </div>
  );
};

export default FlexBoard;
