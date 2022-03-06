import React from "react";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import * as yup from "yup";

export const formValidationSchema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().required("Required"),
  password: yup.string().required("Required"),
  Address: yup
    .string()
    .required("Required")
    .min(5, "Minimum 5 character needed"),

  contact: yup.number().required("Required").min(10, "Only 10 digits allowed"),
});

export default function EditForm() {
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
  const navigation = useNavigate();
  //To take data id from url we are using useParams
  const { id } = useParams();
  //To take values from API we are using useState initially setting null
  const [user, setUser] = useState(null);
  const endpoint = "https://620be96bab956ad80566597e.mockapi.io/city";

  const updateDetails = () => {
    //fetching data based on ID
    fetch(endpoint + "/" + id, { method: "GET" })
      .then((response) => response.json())
      //if there is response then set user to response
      .then((data) => {
        setUser(data);
      });
  };
  //Api call
  useEffect(updateDetails, []);

  const saveData = (data) => {
    const endpoint = "https://620be96bab956ad80566597e.mockapi.io/city";
    fetch(endpoint + "/" + id, {
      method: "PUT",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
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
    isValid,
    dirty,
  } = useFormik({
    //checking if user is null or not
    initialValues: user ? user : {},
    //enableReinitialize should be true to update form values
    enableReinitialize: true,
    //validation part of the form
    validationSchema: formValidationSchema,
    //submit function on clicking save button this method will be called
    onSubmit: (values) => {
      saveData(values);
    },
  });

  console.log("values in edit", values);

  return (
    <main>
      <div style={headerStyle}>
        <h1>
          <i>
            <b>Edit User Id {id}</b>
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
          <Button
            color="primary"
            variant="contained"
            type="submit"
            disabled={!(isValid || dirty)}
          >
            Save
          </Button>
        </div>
      </form>
    </main>
  );
}
