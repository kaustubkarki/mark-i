import React from "react";
import InfoForm from "../../components/info/InfoForm";
import Export from "../../components/card/Export";
import Post from "../../components/flexBox/post/Post";
import UltoPost from "../../components/flexBox/post/Ultopost";
import "./cloudsExport.css";
import bg from "./../../../assets/cloudExport.png";

const CloudsExport = () => {
  return (
    <div className="form">
      <InfoForm
        trigger={bg}
        text={
          "AllSpark technology has the experienced and industry standard working professional to set up the entire IT architecture. We do provide the server setup service in a heterogeneous operating system environment like Window Server, Linux and Unix (Redhat/Solaris/AIX and other distributions"
        }
        main={"Amazon Web Services"}
      />
      <br />
      <Post />
      <UltoPost />
      <br />
      <Export />
    </div>
  );
};

export default CloudsExport;
