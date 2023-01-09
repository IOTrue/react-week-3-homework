import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { HiHome } from "react-icons/hi";
import '../main.css'
import '../reset.css'

function HomeHeader() {
  return (
    <StHeader>
        <StLinkHome>
            <Link to="/"><HiHome className="hihome"/></Link>
        </StLinkHome>
        <StH1>Todo List - React redux toolkit</StH1>
    </StHeader>
  )
}


const StHeader = styled.header`
    display:flex;
    justify-content: space-between;
    align-items: center;;
    border-bottom: 1px solid #d2d2d2;
    padding: 10px 15px;
    min-width: 220px;
`
const StLinkHome = styled.a`
    cursor: pointer;
`
const StH1 = styled.h1`
    font-weight: bold;
    font-size: 22px;
`

export default HomeHeader