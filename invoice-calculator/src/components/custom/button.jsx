import React from 'react';

const Button = ({ label="", onClick=()=>{}, className=""}) => {
    return (        
        <button onClick={onClick} className={`w-full inline-flex justify-center items-center rounded-md gap-[5px] text-[#fff] bg-[#7266ff] h-[40px] text-[16px] leading-[27px] text-center ${className}`}>
            {label} 
        </button>
    )
}

export default Button;