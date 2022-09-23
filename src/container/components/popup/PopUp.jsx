import React from "react";
import "./popUp.css";

const PopUp = (props) => {
  return props.trigger ? (
    <div className="PopUp_app">
      <div className="PopUp_inner">
        <div className="close-btn">
          <button onClick={() => props.setTrigger(false)}>X</button>
        </div>
        <div className="PopUp_content"> {props.children}</div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopUp;
