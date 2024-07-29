import React from 'react'

const Error = ({message= "",className= "", ...props}) => {
  return (
    <div className={`text-[FF0000] ${className}`}>{message}</div>
  ) 
}

export default Error