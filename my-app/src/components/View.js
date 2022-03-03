import React from "react";
import Buttons from "./Buttons";
import Card from "./Card";

const View = () => {
  const displayData = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontFamily: "Times New Roman",
    backgroundColor: "#4267B2",
  };

  return (
    <div>
      <header style={displayData}>
        <h1>View Details</h1>
      </header>

      <Card />

      <Buttons data="Go Back" type="GO BACK" />
    </div>
  );
};

export default View;
