import { useState } from "react";
import "./project.css";

const Projects = () => {
  //for clients
  const [display_clNum, setdisplay_clNum] = useState("?");
  const [my_clText, setmy_clText] = useState("Click me!");
  //for working projects
  const [display_WNum, setdisplay_wNum] = useState("?");
  const [my_wText, setmy_wText] = useState("Click me!");
  //for completed projects
  const [display_coNum, setdisplay_coNum] = useState("?");
  const [my_coText, setmy_coText] = useState("Click me!");
  //---------------------------------------------------------------

  var i = 0,
    j = 0,
    k = 0;
  var m = 4;
  var n = 6;
  var o = 6;

  // clients Numbers lai--------------------------->>>>>>>>>>>>>>>
  function my_clientLoop(m) {
    setInterval(() => {
      if (i < m) {
        setdisplay_clNum(i);
        i++;
      }
      //   i = 0;
    }, 399);
  }

  function my_clienttextfunc() {
    setmy_clText("Loading...");
    setTimeout(() => {
      setmy_clText("Clients");
    }, 1000);
  }

  // for number of  working projects --------------------------------------->>>>>>>>>> */
  function my_workingLoop(o) {
    setInterval(() => {
      if (k < o) {
        setdisplay_wNum(k);
        k++;
      }
    }, 399);
  }

  function my_workingtextfunc() {
    setmy_wText("Loading...");
    setTimeout(() => {
      setmy_wText("Working Projects");
    }, 1000);
  }
  //   for completed projects ------------------------------->>>>>>>
  function my_completedLoop(n) {
    setInterval(() => {
      if (j < n) {
        setdisplay_coNum(j);
        j++;
      }
    }, 399);
  }

  function my_completedtextfunc() {
    setmy_coText("Loading...");
    setTimeout(() => {
      setmy_coText("Completed Projects");
    }, 1000);
  }

  return (
    <div className="mainFlex_all">
      <div className="mainFlex_all-clients">
        <h1>{display_clNum}</h1>
        <button
          onClick={() => {
            my_clientLoop(m);
            my_clienttextfunc();
          }}
        >
          {my_clText}
        </button>
      </div>

      {/* for number of completed projects----------------------------------->>>>>>>>> */}

      <div className="mainFlex_all-clients">
        <h1>{display_coNum}</h1>
        <button
          onClick={() => {
            my_completedLoop(n);
            my_completedtextfunc();
          }}
        >
          {my_coText}
        </button>
      </div>

      {/* for number of  working projects --------------------------------------->>>>>>>>>> */}

      <div className="mainFlex_all-clients">
        <h1>{display_WNum}</h1>
        <button
          onClick={() => {
            my_workingLoop(o);
            my_workingtextfunc();
          }}
        >
          {my_wText}
        </button>
      </div>
    </div>
  );
};

export default Projects;
