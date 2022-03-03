import React from "react";
import Button from "@mui/material/Button";
//useNavigate is used insted of useHistory to push url
import { useNavigate } from "react-router-dom";

const Buttons = ({ data ,type,values}) => {
  const btnStyle = {
    backgroundColor: "#4267B2",
    color: "white",
    width: "15rem",
  };
 const endpoint ="https://620be96bab956ad80566597e.mockapi.io/city";
  const navigation = useNavigate();
  const saveData = (values) =>{
    fetch(endpoint,
      {
        method: "POST",
        body:JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      })
    

  }
  const navigateToView = () => {
    fetch(endpoint,{method: "GET",}).then(response => response.json()).then(empDetails=>{
      console.log("EMP DETAILS",empDetails);
    }).then(()=>{
      navigation("/view");
      
  });
    
  };
  const goBack = () => {
    //When clicking on button url should change to "/form"
    navigation("/form");
  };

  const registerData = () => {
    console.log("SAVE",values);
    saveData(values)
  
   

  }
  const handleClick = (e) => {
    console.log("12", e.target.innerText);
    // if the clicked btn innerText is VIEW DETAILS  navigateToView() is called which pushes the url /view
    if (e.target.innerText === "VIEW DETAILS") navigateToView();
    // if the clicked btn innerText is GO BACK  goBack() is called which pushes the url /form*
    if (e.target.innerText === "GO BACK") goBack();

    if (e.target.innerText === "REGISTER") registerData();
  };

  return (
    <div>
      <Button style={btnStyle} variant="contained" type={type} onClick={handleClick}>
        {data}
      </Button>
    </div>
  );
};

export default Buttons;
