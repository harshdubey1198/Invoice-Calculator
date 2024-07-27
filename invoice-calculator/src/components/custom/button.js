import React from 'react';

const Button = ({ label="", onClick=()=>{}, className=""}) => {
    return (        
        <button onClick={onClick} className={`w-full inline-flex justify-center items-center gap-[5px] text-[#fff] bg-[#FF4081] h-[40px] text-[16px] leading-[27px] text-center rounded-full ${className}`}>
            {label} 
        </button>
    )
}

export default Button;