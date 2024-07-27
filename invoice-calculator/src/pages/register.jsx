import React from "react";
import Label from "../components/custom/label";
import TextInput from "../components/custom/textinput";
import Button from "../components/custom/button";
import { Link } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Register = () => {

  const [formInput, setFormInput] = [{
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    password: "",
    confirmPassword: ""
  }]

  return (
    <div className="md:pt-[90px] md:pb-[20px] max-md:py-[50px] bg-[linear-gradient(0deg,#fff_0%,#c5eaf9_100%)]">
      <div className="container mx-auto md:px-[40px] max-md:px-[15px]">
        <div className="max-w-[500px] px-[10px] md:px-[30px] py-[40px] relative bg-white mx-auto w-full rounded-[10px] border">
          <h2 className="mb-[20px] text-center md:text-left">Sign Up</h2>
          <div>
            <div className="grid grid-cols-2 gap-[10px] mb-[10px]">
            <div>
              <Label title="First Name" htmlFor="firstName" />
              <TextInput name="firstName" id="firstName"/>
            </div>
            <div>
              <Label title="Last Name" htmlFor="lastName" />
              <TextInput name="lastName" id="lastName"/>
            </div>
            </div>
            <div className="mb-[10px]">
              <Label title="User Name" htmlFor="userName" />
              <TextInput name="userName" id="userName"/>
            </div>
            <div className="mb-[10px]">
              <Label title="Email" htmlFor="email" />
              <TextInput name="email" id="email"/>
            </div>
            <div className="mb-[10px]">
              <Label title="Phone Number" htmlFor="phone" />
              <TextInput name="phone" id="phone"/>
            </div>
            <div className="mb-[10px]">
              <Label title="Address" htmlFor="address" />
              <TextInput name="address" id="address"/>
            </div>
            <div className="mb-[10px]">
              <Label title="DOB" htmlFor="dob" />
              <TextInput name="dob" id="dob"/>
            </div>
            <div className="grid grid-cols-2 gap-[10px] mb-[10px]">
              <div className="relative">
                <Label title="Password" htmlFor="password" />
                <TextInput name="password" id="password"/>

                <button className="absolute right-[10px] top-[68%] translate-y-[-50%]">
                  <FaRegEyeSlash />
                </button>
              </div>
              <div className="relative">
                <Label title="Confirm Password" htmlFor="confirm-password" />
                <TextInput name="confirmPassword" id="confirm-password"/>

                <button className="absolute right-[10px] top-[68%] translate-y-[-50%]">
                  <FaRegEyeSlash />
                </button>
              </div>
            </div>
            <Button label={`Log In`} />
            <p className="text-center md:text-left mt-[10px]">
              Do not have an account?{" "}
              <Link to="/login" className="text-[#00f]">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
