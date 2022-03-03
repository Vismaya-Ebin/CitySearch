import React from "react";
import Buttons from "./Buttons";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";

import * as yup from "yup";

export const formValidationSchema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().required("Required"),
  password: yup.string().required("Required"),
  Address: yup
    .string()
    .required("Required")
    .min(5, "Minimum 5 character needed")
    .max(15, "Only 15 allowed"),
  contact: yup
    .number()
    .required("Required")
    .min(10, "Only 10 digits allowed"),
});

export default function Form() {
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

  const btnStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "center",
    alignItems: "center",
  };
  const headerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4267B2",
    color: "white",
    fontFamily: "Times New Roman",
  };

  //write a useFormik({}) with initial values with a submit function which will be called on clicking submit()
  //We will pass initialValue & onSubmit to useFormik hook
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
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
          helperText={errors.password && touched.password ? errors.password : ""}
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
          type="number"
          onChange={handleChange}
          onBlur={handleBlur}
          id="contact"
          name="contact"
          value={values.contact}
          error={errors.contact && touched.contact}
          helperText={errors.contact && touched.contact ? errors.contact : ""}
          fullWidth
        />
        <div style={btnStyle}>
          <Buttons type="submit" data="Register" values={values} />
          <Buttons  type="View Details" data="View Details" />
          {/* <Buttons data="Clear Form" values={values} /> */}
        </div>
      </form>
    </main>
  );
}
