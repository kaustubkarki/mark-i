import React from "react";
import InfoForm from "../../components/info/InfoForm";
import Export from "../../components/card/Export";
import Flexbox from "../../components/flexBox/Flexbox";
import "./Security.css";
import bg from "./../../../assets/securityBG.png";

const Security = () => {
  return (
    <div className="security">
      <InfoForm
        trigger={bg}
        text={
          "AllSpark technology has the experienced and industry standard working professional to set up the entire IT architecture. We do provide the server setup service in a heterogeneous operating system environment like Window Server, Linux and Unix (Redhat/Solaris/AIX and other distributions)"
        }
        main={"Information Security Consultation"}
      />
      <Flexbox />
      <Export />
    </div>
  );
};

export default Security;
