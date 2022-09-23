import React from "react";
import "./flexbox.css";
import bag from "./../../../assets/bag.png";
import book from "./../../../assets/book.png";
import card from "./../../../assets/card.png";
import global from "./../../../assets/global.png";

const Flexbox = () => {
  return (
    <div className="flexBox_main">
      <div className="flexBox_row1">
        <div className="content1">
          <div className="flexBox-image">
            <img src={bag} alt="bag" />
          </div>
          <div className="flexBox_content">
            <h2>Dedicated Hosting</h2>
            <p>
              Healthcare is a very private and critical data domain. Bahmni on
              cloud makes sure every instance is hosted on a dedicated server
              which makes it fully secure; backed by Encrypted Secure Key.
            </p>
          </div>
          {/* next component lai display garna space coz confuse hunxa */}
          <div className="content2">
            <div className="flexBox-image">
              <img src={book} alt="book" />
            </div>
            <div className="flexBox_content">
              <h2>Custom Domain</h2>
              <p>
                If you own a domain, you can provide us the details, and we will
                help you map it to your instance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <---------------------2nd row begins------------------------> */}

      <div className="flexBox_row1">
        <div className="content1">
          <div className="flexBox-image">
            <img src={card} alt="bag" />
          </div>
          <div className="flexBox_content">
            <h2>Reduce Complexity </h2>
            <p>
              The team at Allspark has a proven track record of working on
              Bahmni with a lot of experience, right from the initiation of the
              product development discussions till today. Our team members are
              part of the Bahmni Core team.
            </p>
          </div>
          {/* next component lai display garna space coz confuse hunxa */}
          <div className="content2">
            <div className="flexBox-image">
              <img src={global} alt="book" />
            </div>
            <div className="flexBox_content">
              <h2>Access PHR Globally</h2>
              <p>
                Patient Portal allows patients to book appointments online. It
                also allows patients to keep a record of their allergies and
                conditions. Patients can access previous prescriptions and lab
                reports anytime anywhere. Users can create profiles for their
                family members as well and manage them for them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Flexbox;
