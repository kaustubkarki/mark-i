import React from "react";
// import Post from "./container/components/flexBox/post/Post";
// import { ReactDOM } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./container/AOD/navbar/navbar";
import "./app.css";
import Footer from "./container/AOD/footer/footer";
import Line from "./container/AOD/footer/line";
import MainHome from "./container/home/mainHome";
import Form from "./container/form/Form";
import HealthIt from "./container/NOD/HealthIt/HealthIt";
import Enterprise from "./container/NOD/Enterprise/Enterprise";
import Security from "./container/NOD/Security/Security";
import CloudsExport from "./container/NOD/Clouds/CloudsExport";
import Mails from "./container/AOD/mails/Mails";

function App() {
  return (
    <Router>
      <div className="App">
        <Mails />
        <Navbar />
        {/* <HealthIt /> */}
        {/* <Enterprise /> */}
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/form" element={<Form />} />
          <Route path="/HealthIt" element={<HealthIt />} />
          <Route path="/Enterprise" element={<Enterprise />} />
          <Route path="/Security" element={<Security />} />
          <Route path="/CloudsExport" element={<CloudsExport />} />
        </Routes>
        <Line />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
