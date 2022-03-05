import React from "react";

import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import { useState } from "react";

import * as yup from "yup";

export const formValidationSchema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid email address").required("Required"),
  password: yup.string().required("Required"),
  Address: yup
    .string()
    .required("Required")
    .min(5, "Minimum 5 character needed"),

  contact: yup.number().required("Required"),
});

export default function Form() {
  const navigation = useNavigate();
  const container = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flexStart",
    alignItems: "center",
    gap: "0.6rem",
    minHeight: "100vh",
    margin: "0px",
  };

  const btnDiv = {
    display: "flex !important",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };
  const btnStyle = {
    
    margin: "3rem",
  };
  const headerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1976d2",
    color: "white",
    fontFamily: "Times New Roman",
  };
  const endpoint = "https://620be96bab956ad80566597e.mockapi.io/city";
  const [initialState, updatedState] = useState([]);
  const saveData = (values) => {
    fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    });
  };

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
  //write a useFormik({}) with initial values with a submit function which will be called on clicking submit()
  //We will pass initialValue & onSubmit to useFormik hook

  const {
    handleSubmit,
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
    dirty,
    isValid,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      Address: "",
      contact: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("VALUES", values);
      saveData(values);
    },
  });
  return (
    <main>
      <div style={headerStyle}>
        <h1>
          <i>
            <b>Welcome To City Search </b>
          </i>
        </h1>
      </div>
      <form style={container} onSubmit={handleSubmit}>
        <TextField
          id="filled-basic"
          label="Name"
          id="name"
          name="name"
          type="text"
          variant="filled"
          fullWidth
          value={values.name}
          error={errors.name && touched.name}
          helperText={errors.name && touched.name ? errors.name : ""}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextField
          id="filled-basic"
          label="Email Id"
          variant="filled"
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
          name="email"
          value={values.email}
          error={errors.email && touched.email}
          helperText={errors.email && touched.email ? errors.email : ""}
          fullWidth
        />
        <TextField
          id="filled-basic"
          label="Password"
          variant="filled"
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
          id="password"
          name="password"
          value={values.password}
          error={errors.password && touched.password}
          helperText={
            errors.password && touched.password ? errors.password : ""
          }
          fullWidth
        />
        <TextField
          id="filled-basic"
          label="Address"
          variant="filled"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          id="Address"
          name="Address"
          value={values.Address}
          error={errors.Address && touched.Address}
          helperText={errors.Address && touched.Address ? errors.Address : ""}
          fullWidth
        />

        <TextField
          id="filled-basic"
          label="Contact No"
          variant="filled"
          type="tel"
          onChange={handleChange}
          onBlur={handleBlur}
          id="contact"
          name="contact"
          value={values.contact}
          error={errors.contact && touched.contact}
          helperText={errors.contact && touched.contact ? errors.contact : ""}
          fullWidth
        />
        <div style={btnDiv}>
          <Button
          color="primary"
            variant="contained"
            type="submit"
            disabled={!(isValid || dirty)}
          >
            Register
          </Button>

          <Button color="primary" variant="contained"  style={btnStyle} onClick={navigateToView}>
            View Details
          </Button>
        </div>
      </form>
    </main>
  );
}
