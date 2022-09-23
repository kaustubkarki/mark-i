import React from "react";
import Card from "./card";
import "./export.css";

const Export = () => {
  return (
    <div className="rowss">
      <div className="row_1">
        <div className="row1_content">
          <Card />
        </div>
        <div className="row1_content">
          <Card />
        </div>
        <div className="row1_content">
          <Card />
        </div>
      </div>
      <div className="row_2">
        <div className="row2_content">
          <Card />
        </div>
        <div className="row2_content">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Export;
