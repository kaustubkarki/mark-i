import React from "react";

const line = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <div style={{ flex: 1, height: "1px", backgroundColor: "black" }} />

      <div>
        <p style={{ width: "70px", textAlign: "center" }}>🦼</p>
      </div>

      <div style={{ flex: 1, height: "1px", backgroundColor: "black" }} />
    </div>
  );
};

export default line;
