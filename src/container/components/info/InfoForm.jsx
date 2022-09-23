import React from "react";
import foto from "./../../../assets/peopleConnect.png";
import "./InfoForm.css";
// import bg from "./../../../assets/background .jpg";

const InfoForm = (props) => {
  const mystyle = {
    backgroundImage: `url(${props.trigger})`,
    backgroundSize: "cover",
    backgroundRepeat: "no - repeat",
    backgroundAttachment: "fixed",
  };
  return (
    <div style={mystyle} className="InfoForm">
      <div className="InfoForm_text">
        <h1>{props.main}</h1>
        <p>{props.text}</p>
        <div className="InfoForm-button">
          <a href="https://www.bahmni.org">
            <button type="link">Know more about {props.main}</button>
          </a>
        </div>
      </div>
      <div className="InfoForm_image">
        <img src={foto} alt="foto" />
      </div>
    </div>
  );
};

export default InfoForm;
