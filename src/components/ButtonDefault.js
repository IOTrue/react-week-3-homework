import React from 'react'
import styled from "styled-components";
import '../main.css'


function ButtonDefault(props) {
    const {children, bgColor, hoverColor, hoverFontColor,
        padding, margin, className, borderRadius, fontDefaultColor,
        onClick, disabled} = props
  return (
    <StButtonDefault disabled={disabled} onClick={onClick} fontDefaultColor={fontDefaultColor} className={className||null} borderRadius={borderRadius} padding={padding} margin={margin} bgColor={bgColor} hoverColor={hoverColor} hoverFontColor={hoverFontColor}>{children}</StButtonDefault>
  )
}

const StButtonDefault = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${(props)=>props.padding || '12px 80px'};
    border-radius: ${(props)=>props.borderRadius || '20px;'};
    background-color: ${(props)=>props.bgColor || 'transparent'};
    border: 1px solid ${(props)=>props.bgColor || '#e2e2e2'};
    font-weight: bold;
    color: ${(props)=>props.fontDefaultColor || '#000'};
    cursor: pointer;
    :hover{
        background-color: ${(props)=>props.hoverColor || 'transparent'};
        border: 1px solid ${(props)=>props.hoverColor || '#a2a2a2'};
        color: ${(props)=>props.hoverFontColor || '#000'};
    }
`


export default ButtonDefault