import React from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import '../reset.css'
import { Link } from 'react-router-dom';

function LinkContent({path, children}) {
  return (
    <Link to={path} className="linkContent">
        <span>{children}</span>
        <BsFillArrowRightCircleFill className="iconArrow"/>
    </Link>
  )
}

export default LinkContent