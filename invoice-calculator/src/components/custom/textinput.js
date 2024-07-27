import React from 'react'

const TextInput = ({id="", type="", disabled=false, value="", onChange=()=>{}, className="", placeholder="", errorText="", ...props}) => {
    return (
        <>
        <input
            disabled={disabled}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={type || "text"}
            id={id}
            className={`h-[40px] w-full focus:outline-none border-[#c4c4c4] px-[10px] border focus:border-[#1E40AF] rounded-[5px] focus:shadow-[0_0_2px_#000000] text-[14px] ${disabled && "hover:border text-[#aaa]"} ${className}`}
            {...props}
        />
        {errorText && (
            <span className='text-[#FF0000] text-[12px]'>{errorText}</span>
        )}
        </>
    )
}

export default TextInput;