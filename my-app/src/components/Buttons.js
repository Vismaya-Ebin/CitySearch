import React from "react";
import Button from "@mui/material/Button";
//useNavigate is used insted of useHistory to push url
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

//values passed as props
const Buttons = ({ data, type, values, getId }) => {
  const [initialState, updatedState] = useState([]);
  const [open, setOpen] = useState(false);
  
  //button style
  const btnStyle = {
    backgroundColor: "#4267B2",
    color: "white",
    width: "15rem",
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    
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
    })
      .then((data) => {
        setOpen(true);
      })
      .catch((err) => {
       
        setOpen(false)
      
      });
  };

  const updateData = (values) => {
    const copyOfInitialData = [...initialState];
    copyOfInitialData[getId] = values;
    console.log("Values from Edit Field", copyOfInitialData[getId]);
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
 

  //on clicking on registerData on UI this function will be called
  const registerData = () => {
    //it will call saveData()
    saveData(values);
  };

  const handleClick = (e) => {
    console.log("12", e);
    // if the clicked btn innerText is VIEW DETAILS  navigateToView() is called which pushes the url /view
    if (e.target.innerText === "VIEW DETAILS") navigateToView();
    // if the clicked btn innerText is GO BACK  goBack() is called which pushes the url /form*
    
    if (e.target.innerText === "SUBMIT") registerData();
    if (e.target.innerText === "SAVE") updateData();
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
      <div></div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Data saved successfully
        </Alert>
      </Snackbar>
     
    </div>
  );
};
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default Buttons;
