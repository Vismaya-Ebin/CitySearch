import React from "react";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import "../App.css";

export default function Card({ initialData }) {
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

      const delIcon = {
          color:"red"
      }
      const editIcon = {
        color:"orange",
        marginLeft:"3rem"
    }
    
  return (
    <div style={displayFlex}>
     {initialData.map((data,index)=>(
     <div style={container}><Paper style={paperStyle} elevation="12" key={index}>
       <h4> <i>{data.id}</i></h4>
       <h4><span>Name     :{data.name}</span></h4> 
       <h4><span>Password :{data.password}</span></h4>
       <h4><span>Email    :{data.email}</span></h4>
       <h4><span>Address  :{data.Address}</span></h4>
       <h4><span>Contact  :{data.contact}</span></h4>
    
       <DeleteIcon style={delIcon} onClick={()=>{alert("delete")}}/>
       <EditIcon style={editIcon} onClick={()=>{alert("edit")}}/>
      
     </Paper>
     </div>))}
   
     
    </div>
  );
}
