import React from "react";
import Export from "../../components/card/Export";
import InfoForm from "../../components/info/InfoForm";
import "./HealthIt.css";
import bg from "./../../../assets/healthIT.jpg";

const HealthIt = () => {
  return (
    <div className="health">
      <InfoForm
        trigger={bg}
        text={
          "HealthIT is important in order to respond the health care services and focus in the clinical delivery. We provide the standard implementation of the Health Record System following the opensource ecosystem and patient centered implementation. "
        }
        main={"HealthIT Audit"}
      />
      <br />
      <br />
      <Export />
    </div>
  );
};

export default HealthIt;
