import React from "react";
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import "../App.css";
import { useState, useEffect, useContext,  createContext } from "react";
import { useNavigate } from "react-router-dom";
/**This component is to display data on card */
export default function Card() {
    const [initialState, updatedState] = useState([
        { id: "", name: "", email: "", password: "", Address: "", contact: "" },
      ]);
    const container ={
        dispaly:"flex",
        flexDirection:"row",
        flexWrap: "wrap",
     }

    const displayFlex ={
        display:"flex",
        flexDirection:"row",
        gap:"2rem",
        flexWrap: "wrap",
        justifyContent:"space-around",
        alignContent:"center",
        margin:".53rem"
        
       }

    const paperStyle ={
        fontsize:"10rem",
        height:"20rem",
        width:"24rem",
        textAlign:"center",
        backgroundColor:"rgb(66, 103, 178)",
        color:"white",
        fontFamily: "Times New Roman",
        fontWeight:"bold"
      }
      const editIcon = {
        color:"orange",
        marginLeft:"3rem"
      } 
      
      const endpoint = "https://620be96bab956ad80566597e.mockapi.io/city";
      const navigation = useNavigate();
      /**Get call to show city data on cards */
      const getApiData = () => {
        fetch(endpoint, { method: "GET" })
          .then((response) => response.json())
          .then((tableData) => {
           updatedState(tableData);
          })
          .catch((err) => {
            console.log("ERROR", err);
          });
      };
      // similar to ComponentDidMount
      useEffect(getApiData, []);

      /**Delete item based on id */
      const deleteData = (id) => {
          fetch(endpoint + "/" + id, { method: "DELETE" })
          .then((response) => response.json())
          .then(() => getApiData())
          .catch((err) => console.log("ERROR", err));
        
      }
      /**Navigate to edit page */
      const editData = (id) => {
        navigation("/edit/" + id);
    }

  return (
      //iterate array of objects by map
    <div style={displayFlex}>
      
     {initialState.map((data,index)=>(
     <div style={container}  key={index}><Paper style={paperStyle}>
       <h4> <i>{data.id}</i></h4>
       <h4><span>Name     :{data.name}</span></h4> 
       <h4><span>Password :{data.password}</span></h4>
       <h4><span>Email    :{data.email}</span></h4>
       <h4><span>Address  :{data.Address}</span></h4>
       <h4><span>Contact  :{data.contact}</span></h4>
   
    
      <Button variant="contained" color="success"  onClick={()=>{editData(data.id)}} style={editIcon}>EDIT</Button>
      <Button variant="contained" color="error" onClick={()=>{deleteData(data.id)}} style={editIcon}>DELETE</Button>
     </Paper>
     </div>))}
   
     
    </div>
  );
}
