import React from "react";
import Export from "../../components/card/Export";
import InfoForm from "../../components/info/InfoForm";
import "./enterprise.css";
import bg from "../../../assets/background.jpg";

const Enterprise = () => {
  return (
    <div className="enterprise">
      <InfoForm
        trigger={bg}
        text={
          "AllSpark technology has the experienced and industry standard working professional to set up the entire IT architecture. We do provide the server setup service in a heterogeneous operating system environment like Window Server, Linux and Unix (Redhat/Solaris/AIX and other distributions"
        }
        main={"Operating System"}
      />
      <br />
      <br />
      <Export />
    </div>
  );
};

export default Enterprise;
