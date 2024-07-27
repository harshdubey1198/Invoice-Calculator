import React from 'react'
import Label from '../components/custom/label'
import TextInput from '../components/custom/textinput'
import Button from '../components/custom/button'

const Register = () => {
  return (
    <div className="max-w-[500px] px-[10px] md:px-[30px] py-[40px] relative bg-white mx-auto w-full rounded-[10px] border">
        <Label title='hello'/>
        <TextInput placeholder='this is me'/>
        <Button label='click me '/>
    </div>
  )
}

export default Register