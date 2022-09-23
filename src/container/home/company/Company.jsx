import React from "react";
import odoo from "../../../assets/company1.png";
import openMrs from "../../../assets/company2.png";
import openElis from "../../../assets/company3.png";
import dcm from "../../../assets/company4.jpeg";
import cht from "../../../assets/company4.png";
import "./company.css";

const Company = () => {
  return (
    <div className="companyImage">
      <img src={odoo} alt="company1" />
      <img src={openMrs} alt="company2" />
      <img src={openElis} alt="company3" />
      <img src={cht} alt="company5" />
      <img src={dcm} alt="company4" />
    </div>
  );
};

export default Company;
