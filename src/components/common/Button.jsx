import React from 'react'

function Button({text,type,onClick,className = ""}) {
    
    let color = "bg-green-400"
    if(type === "submit"){
      color = "bg-sky-200"
    }
    else if(type === "reset"){
       color = "bg-orange-200" 
    }

 

  return <button onClick={onClick} type={type} className={`${color} w-[120px] rounded-md py-2 px-4 cursor-pointer ${className}`}>{text}</button>
}

export default Button