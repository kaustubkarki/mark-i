import React from "react";
import post1 from "./../../../../assets/post1.jpg";
import "./post.css";

function Post() {
  return (
    <div className="gpt3__post" id="post">
      <div className="gpt3__post-image">
        <img src={post1} alt="post" />
      </div>
      <div className="gpt3__post-content">
        <h4>High availability and fault tolerance</h4>
        <h1>
          temp <br /> temp
        </h1>
        <p>
          We prioritize high degree of SLAs to our customer service and
          infrastructure. Both High Availability and Fault Tolerance have the
          same objective of ensuring that your application runs all the time
          without any system degradation.
        </p>
        <h4>okay!</h4>
      </div>
    </div>
    // <>
    //   <div className="row">
    //     <div className="col-lg-4">
    //       <img className="" src={post1} alt="logo" />
    //     </div>
    //     <div className="col-lg-8">
    //       <p className="text-success">
    //         We prioritize high degree of SLAs to our customer service and
    //         infrastructure. Both High Availability and Fault Tolerance have the
    //         same objective of ensuring that your application runs all the time
    //         without any system degradation.
    //       </p>
    //     </div>
    //   </div>
    // </>
  );
}

export default Post;
