import React from "react";
import phone from "./../../../assets/PhoneBook.png";
import mails from "./../../../assets/Email.png";
import "./mails.css";

const Mails = () => {
  return (
    <div className="Mails_main">
      <div className="Mails_main-Phone">
        <img src={phone} alt="foto" />
        <p>| 9869696969</p>
      </div>
      <div className="Mails_main-Email">
        <img src={mails} alt="email" />
        <p>sales@allsparknp.com</p>
      </div>
    </div>
  );
};

export default Mails;
