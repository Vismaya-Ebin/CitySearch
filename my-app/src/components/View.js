import React from "react";
import Buttons from "./Buttons";

import { empJson } from "../assets/empJson";
import Card from './Card'

import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";



const View = () => {
  const [initialState,updatedState] = useState([{id:"",
  name:"",
  email:"",
  password:"",
  Address:"",
  contact:"",
  

}])
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

  
  const endpoint = "https://620be96bab956ad80566597e.mockapi.io/city";

  const getApiData = () => {
     fetch(endpoint, { method: "GET" })
      .then((response) => response.json())
      .then((tableData) => {console.log("Data from API", tableData);updatedState(tableData)})
      .catch((err) => {
        console.log("ERROR", err);
      });
  };
  // similar to ComponentDidMount
  useEffect(getApiData, []);

  return (
    <div>
      <header style={displayData}>
        <h1>View Details</h1>
      </header>
      
      <Card initialData={initialState}  />
      
    
      <Buttons data="Go Back" />
    </div>
  );
};

export default View;
