import React from "react";
import Button from "@mui/material/Button";
//useNavigate is used insted of useHistory to push url
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//values passed as props
const Buttons = ({ data, type, values,getId}) => {

  const [initialState, updatedState] = useState([]);
  //button style
  const btnStyle = {
    backgroundColor: "#4267B2",
    color: "white",
    width: "15rem",
  };
  

  const endpoint = "https://620be96bab956ad80566597e.mockapi.io/city";
  //navigation for page navigation
  const navigation = useNavigate();
  //values recieved as props need to be passed to API by stingify,as it is post method,body, headers need to be passed
  const saveData = (values) => {
    fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    });
  };
  //on clicking view button we have to showDetails so we will call getApi
  const navigateToView = () => {
    fetch(endpoint, { method: "GET" })
      .then((response) => response.json())
      .then((empDetails) => {
        console.log("UPDATED DETAILS", empDetails);
        updatedState(empDetails);
      })
      .then(() => {
        navigation("/view");
      });
  };
  const goBack = () => {
    //When clicking on button url should change to "/form"
    navigation("/form");
  };

  //on clicking on registerData on UI this function will be called
  const registerData = () => {
   //it will call saveData()
    saveData(values);
  };
  
  const handleClick = (e) => {
    console.log("12",e);
    // if the clicked btn innerText is VIEW DETAILS  navigateToView() is called which pushes the url /view
    if (e.target.innerText === "VIEW DETAILS") navigateToView();
    // if the clicked btn innerText is GO BACK  goBack() is called which pushes the url /form*
    if (e.target.innerText === "GO BACK") goBack();

    if (e.target.innerText === "REGISTER") registerData();

   
  };
 

  return (
    <div>
      
      <Button
        style={btnStyle}
        variant="contained"
        type={type}
        onClick={handleClick}
      >
        {type}
      </Button>
      <div>
    
       </div>
      
    </div>
  );
};

export default Buttons;
