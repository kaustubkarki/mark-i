import React from "react";
import "./footer.css";
import logo from "./../../../assets/logo1.png";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="myapp__footer section__padding">
    <div className="myapp__footer-heading">
      <h1 className="gradient-text">Allspark Technology</h1>
      <h1>Partner for Digitization.</h1>
    </div>

    <div className="myapp__footer-btn">
      <p>
        {" "}
        <Link to="/form">Contact Now!</Link>
      </p>
    </div>
    {/* Image  */}
    <div className="myapp__footer-links">
      <div className="myapp__footer-links_logo">
        <Link to="/">
          <img src={logo} alt="myapp_logo" />
        </Link>
        <Link to="/">
          <p>
            {" "}
            <br /> All Rights Reserved!
          </p>
        </Link>
      </div>
      {/* coloumb 1 */}
      <div className="myapp__footer-links_div">
        <h4>
          <u>HealthIT</u>
        </h4>
        <p>HealthIT audit</p>
        <p>EHR Training</p>
        <p>HealthIT Interoperability Consultation</p>
      </div>
      {/* Columb 2 */}
      {/* <div className="myapp__footer-links_div">
        <h4>
          <u>Enterprise</u>
        </h4>
        <p>Operating Sysytem </p>
        <p>Database Services</p>
        <p>Container Based Services</p>
        <p>OpenSource Application Development</p>
        <p>DevOps/SysOps</p>
      </div> */}
      {/* column 3 */}
      {/* <div className="myapp__footer-links_div">
        <h4>
          <u>Cloud</u>
        </h4>
        <p> AWS</p>
        <p>GCP</p>
        <p>Azure</p>
        <p>Huawei Cloud</p>
      </div> */}
      {/* Columb 4 */}
      {/* <div className="myapp__footer-links_div">
        <h4>
          <u>Security and governance</u>
        </h4>
        <p>It Audit</p>
        <p>Information Security and Consulation</p>
        <p>VA/PT</p>
      </div> */}

      {/* ADRESS COLUMB */}
      <div className="myapp__footer-links_div">
        <h4>
          <u>
            <b>Office</b>
          </u>
        </h4>
        <p>All Spark Technologies</p>
        <p>📍 Kathmandu, Nepal</p>
        <p>🧻sales@allsparknp.com</p>
      </div>
    </div>
    <div className="myapp__footer-copyright">
      <p>@2022 My app. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
