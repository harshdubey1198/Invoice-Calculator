import React, { useState } from 'react'
// import Header from '../Layouts/Header'
import Label from '../components/custom/label'
import TextInput from '../components/custom/textinput'
import Button from '../components/custom/button'
import {Link} from 'react-router-dom'

function Login() {
  const [formInput, setFormInput] = useState({
    emailorusername: '',
    password: "",
  })
  return (
    <div>
      <div className="md:pt-[90px] md:pb-[20px] max-md:py-[50px] bg-[linear-gradient(0deg,#fff_0%,#c5eaf9_100%)]">
      <div className="container mx-auto md:px-[40px] max-md:px-[15px]">
        <div className="max-w-[500px] px-[10px] md:px-[30px] py-[40px] relative bg-white mx-auto w-full rounded-[10px] border">
          <h2 className="mb-[20px] text-center md:text-left">Log In</h2>
          <div>
            <div className="mb-[10px]">
              <Label title="Email Or User Name" htmlFor="userName" />
              <TextInput name="emailorusername" id="userName"/>
            </div>
            <div className="mb-[10px]">
              <Label title="Password" htmlFor="password" />
              <TextInput name="Password" id="password"/>
            </div>
            <Button label={`Log In`} />
            <p className="text-center md:text-left mt-[10px]">
              Do not have an account?{" "}
              <Link to="/register" className="text-[#00f]">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login