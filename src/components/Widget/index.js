import React from 'react'
import { AiOutlineClose } from "react-icons/ai";

const Widget = ({name}) => {
  return (
    <li>
      <p>{name}</p>
      <button><AiOutlineClose /></button>
    </li>
  )
}

export default Widget
