import React from 'react'

function Button({text,type,onClick}) {
    
    const color =
    type === "submit" ? "bg-sky-200" :
    type === "reset" ? "bg-orange-200" :
    "bg-green-200";

  return <button onClick={onClick} type={type} className={`${color} w-[120px] rounded-md py-2 px-4`}>{text}</button>
}

export default Button