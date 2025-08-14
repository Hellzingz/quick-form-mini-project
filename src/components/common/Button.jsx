import React from 'react'

function Button({text,type,onClick,className = ""}) {
    
    const color =
    type === "submit" ? "bg-sky-200" :
    type === "reset" ? "bg-orange-200" :
    "bg-green-400";

  return <button onClick={onClick} type={type} className={`${color} w-[120px] rounded-md py-2 px-4 cursor-pointer ${className}`}>{text}</button>
}

export default Button