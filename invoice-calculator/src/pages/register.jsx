import React, { useState } from "react";
import Label from "../components/custom/label";
import TextInput from "../components/custom/textinput";
import Button from "../components/custom/button";
import { Link } from "react-router-dom";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const Register = () => {
  // Initialize formInput with useState
  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [show, setShow] = useState({
    password: false,
    confirmPassword: false,
  });

  // NAME HANDLER
  const nameHandler = (e) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/[^A-Za-z]/g, "");
    setFormInput((prevState) => ({
      ...prevState,
      [name]: cleanedValue,
    }));
    setError("");
  };

  // USERNAME HANDLER
  const userNameHandler = (e) => {
    const { name, value } = e.target;
    // Assuming you want to clean up brackets or special characters
    const cleanedValue = value.replace(" ", "");
    setFormInput((prevState) => ({
      ...prevState,
      [name]: cleanedValue,
    }));
    setError("");
  };

  // EMAIL HANDLER
  const emailHandler = (e) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/\s/g, "");
    setFormInput((prevState) => ({
      ...prevState,
      [name]: cleanedValue,
    }));
    setError("");
  };

  // PHONE HANDLER
  const phoneHandler = (e) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/\D/g, "");
    if (numericValue.length <= 10) {
      setFormInput((prevState) => ({
        ...prevState,
        [name]: numericValue,
      }));
      setError("");
    }
  };

  // PASSWORD HANDLER
  const passwordHandler = (e) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/\s/g, "");
    setFormInput((prevState) => ({
      ...prevState,
      [name]: cleanedValue,
    }));
    setError("");
  };

  return (
    <div className="md:pt-[50px] md:pb-[20px] max-md:py-[50px] bg-[linear-gradient(0deg,#fff_0%,#c5eaf9_100%)]">
      <div className="container mx-auto md:px-[40px] max-md:px-[15px]">
        <div className="max-w-[500px] px-[10px] md:px-[30px] py-[40px] relative bg-white mx-auto w-full rounded-[10px] border">
          <h2 className="mb-[20px] text-center md:text-left">Sign Up</h2>
          <div>
            <div className="grid grid-cols-2 gap-[10px] mb-[10px]">
              <div>
                <Label title="First Name" htmlFor="firstName" />
                <TextInput
                  name="firstName"
                  id="firstName"
                  value={formInput.firstName}
                  onChange={nameHandler}
                />
              </div>
              <div>
                <Label title="Last Name" htmlFor="lastName" />
                <TextInput
                  name="lastName"
                  id="lastName"
                  value={formInput.lastName}
                  onChange={nameHandler}
                />
              </div>
            </div>
            <div className="mb-[10px]">
              <Label title="User Name" htmlFor="userName" />
              <TextInput
                name="userName"
                id="userName"
                value={formInput.userName}
                onChange={userNameHandler}
              />
            </div>
            <div className="mb-[10px]">
              <Label title="Email" htmlFor="email" />
              <TextInput
                name="email"
                id="email"
                value={formInput.email}
                onChange={emailHandler}
              />
            </div>
            <div className="mb-[10px]">
              <Label title="Phone Number" htmlFor="phone" />
              <TextInput
                name="phone"
                id="phone"
                value={formInput.phone}
                onChange={phoneHandler}
              />
            </div>
            <div className="mb-[10px]">
              <Label title="Address" htmlFor="address" />
              <TextInput
                name="address"
                id="address"
                value={formInput.address}
                onChange={(e) => {
                  setFormInput((prevState) => ({
                    ...prevState,
                    address: e.target.value,
                  }));
                  setError("");
                }}
              />
            </div>
            <div className="mb-[10px]">
              <Label title="DOB" htmlFor="dob" />
              <TextInput
                name="dob"
                id="dob"
                type="date"
                value={formInput.dob}
                onChange={(e) => {
                  setFormInput((prevState) => ({
                    ...prevState,
                    dob: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="grid grid-cols-2 gap-[10px] mb-[10px]">
              <div className="relative">
                <Label title="Password" htmlFor="password" />
                <TextInput
                  name="password"
                  id="password"
                  type={show.password ? "text" : "password"}
                  value={formInput.password}
                  onChange={passwordHandler}
                />
                {show.password ? (
                  <button
                    onClick={() => setShow((prevState) => ({...prevState, password: false,}))}
                    className="absolute right-[10px] top-[68%] translate-y-[-50%]"
                  >
                    <FaRegEyeSlash size={15} />
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      setShow((prevState) => ({ ...prevState, password: true }))
                    }
                    className="absolute right-[10px] top-[68%] translate-y-[-50%]"
                  >
                    <FaRegEye size={15} />
                  </button>
                )}
              </div>
              <div className="relative">
                <Label title="Confirm Password" htmlFor="confirm-password" />
                <TextInput
                  name="confirmPassword"
                  id="confirm-password"
                  type={show.confirmPassword ? "text" : "password"}
                  value={formInput.confirmPassword}
                  onChange={passwordHandler}
                />
               {show.confirmPassword ? (
                  <button
                    onClick={() => setShow((prevState) => ({...prevState, confirmPassword: false,}))}
                    className="absolute right-[10px] top-[68%] translate-y-[-50%]"
                  >
                    <FaRegEyeSlash size={15} />
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      setShow((prevState) => ({ ...prevState, confirmPassword: true }))
                    }
                    className="absolute right-[10px] top-[68%] translate-y-[-50%]"
                  >
                    <FaRegEye size={15} />
                  </button>
                )}
              </div>
            </div>
            <Button label={`Sign Up`} />
            <p className="text-center md:text-left mt-[10px]">
              Already have an account?{" "}
              <Link to="/login" className="text-[#00f]">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
