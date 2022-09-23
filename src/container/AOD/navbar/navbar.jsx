import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import PopUp from "../../components/popup/PopUp";
import logo from "./../../../assets/logo1.png";
import "./navbar.css";
import pop from "./../../../assets/popMSG4.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showbutton, setshowbutton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setshowbutton(true);
    }, 5000);
  }, []);

  // const navbar = document.getElementById("navbar");
  // window.onscroll = function () {
  //   if (window.pageYOffset >= navbar.offsetTop) {
  //     navbar.classNameList.add("sticky");
  //   } else {
  //     navbar.classNameList.remove("sticky");
  //   }
  // };

  return (
    <div className="myapp__navbar" id="navbar">
      <div className="myapp__navbar-links">
        <div className="myapp__navbar-links_logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/">
            <div className="title_name"> AllSpark Technologies</div>
          </Link>
        </div>
        <div className="myapp__navbar-links_container">
          <p>
            <Link to="/">Home</Link>
            {/* '/' matra because it loads when the page load i.e the first page */}
          </p>
          <p>
            <Link to="/HealthIt">HealthIt</Link>
          </p>
          <p>
            <Link to="/Enterprise">Enterprise</Link>
          </p>
          <p>
            <Link to="/Security">Security</Link>
          </p>
          <p>
            <Link to="/CloudsExport">CloudsExport</Link>
          </p>
          <p>
            <Link to="/form">Contact</Link>
          </p>
        </div>
      </div>

      {/* adding popup for add or stuff */}
      <div className="myapp__navbar-popup ">
        {" "}
        <button onClick={() => setshowbutton(true)}>knowhere</button>
        <PopUp trigger={showbutton} setTrigger={setshowbutton}>
          {" "}
          {/* first ma value ma jailey false*/}
          <h3>Hello man</h3>
          <p>We also have</p>
          <img src={pop} alt="foto" />
        </PopUp>
      </div>

      {/*<---------------------------sign in and signup buttons(css available)----------------------> */}

      {/* <div className="myapp__navbar-sign">
        <p>
          <a href="#signinpage"> Sign in</a>
        </p>
        <button type="button">Sign Up</button>
      </div> */}

      {/*<---------------------------sign in and signup buttons(css available)----------------------> */}

      <div className="myapp__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="myapp__navbar-menu_container scale-up-center">
            <div className="myapp__navbar-menu_container-links">
              <p>
                <Link to="/">Home</Link>
              </p>
              <p>
                <Link to="/HealthIt">HealthIt</Link>
              </p>
              <p>
                <Link to="/Enterprise">Enterprise</Link>
              </p>
              <p>
                <Link to="/Security">Security</Link>
              </p>
              <p>
                <Link to="/CloudsExport">CloudsExport</Link>
              </p>
              <p>
                <Link to="/form">Contact</Link>
              </p>
            </div>

            {/*<---------------------------sign in and signup buttons(css available)----------------------> */}

            {/* <div className="myapp__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div> */}

            {/*<---------------------------sign in and signup buttons(css available)----------------------> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
