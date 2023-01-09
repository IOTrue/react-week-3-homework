import React from 'react'
import styled from "styled-components";

function Footer() {
  return (
    <TodoFooter>2023 TodoList - redux@toolkit</TodoFooter>
  )
}

const TodoFooter = styled.footer`
    text-align: center;
    margin-top: 200px;
`

export default Footer