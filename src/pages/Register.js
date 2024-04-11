import { useState, useEffect } from "react";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import React from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = () => {
    console.log(e.target);
  };
  const onSubmit = () => {
    console.log(e.target);
  };

  return <div>Register</div>;
};

export default Register;
