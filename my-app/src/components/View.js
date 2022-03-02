import React from "react";
import Buttons from "./Buttons";
import { empJson } from "../assets/empJson";

import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";

const columns = [
  { field: "id", headerName: "ID", type: "string", width: 70 },
  { field: "name", headerName: "NAME", type: "string", width: 200 },
  { field: "email", headerName: "EMAIL", type: "string", width: 200 },
  { field: "password", headerName: "PASSWORD", type: "string", width: 200 },
  { field: "Address", headerName: "ADDRESS", type: "string", width: 250 },
  { field: "contact", headerName: "CONTACT", type: "number", width: 200 },
  { field: "edit", headerName: "EDIT", type: "string", width: 200 },
  { field: "delete", headerName: "DELETE", type: "string", width: 200 },
 
];

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
      <div
        style={{
          height: "25rem",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <DataGrid
          rows={initialState}
          columns={columns}
          pageSize={4}
          rowsPerPageOptions={[3]}
        />
      </div>
      <Buttons data="Go Back" />
    </div>
  );
};

export default View;
