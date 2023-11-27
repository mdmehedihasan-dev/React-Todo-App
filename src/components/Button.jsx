import React from 'react'

const Button = ({className,text,click}) => {
  return (
    <div>
      <button className={` py-2 px-3 rounded-xl text-white font-bold ${className}`}  onClick={click} >{text}</button>
    </div>
  )
}

export default Button
