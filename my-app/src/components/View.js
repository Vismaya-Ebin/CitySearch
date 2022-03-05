import React from "react";
import Card from "./Card";
import Fab from '@mui/material/Fab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

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
  const navigation = useNavigate();
  const goBack = () => {
    //When clicking on button url should change to "/form"
    navigation("/form");
  };

  return (
    <div>
      <header style={displayData}>
        <h1>View Details</h1>
      </header>

      <Card />

     <div style={displayData}>
      <Fab color="warning" aria-label="add">
        <ArrowBackIcon  onClick={goBack}/>
      </Fab>
      </div>
    </div>
  );
};

export default View;
