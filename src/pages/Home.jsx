import React from 'react'
import styled from "styled-components";
import LinkContent from '../components/LinkContent';
import '../main.css'
import '../reset.css'

function Home() {
  return (
    <div>
        <StContentsNav>
            <StH2>Todo Contents</StH2>
            <StContentsDiv>
                <LinkContent path="/todoWrite">작성하기</LinkContent>
                <LinkContent path="/todoList">Todo List</LinkContent>
            </StContentsDiv>
        </StContentsNav>
    </div>
  )
}


const StContentsNav = styled.nav`
    margin: 30px 0 100px;
    padding: 40px;
`
const StH2 = styled.h2`
    font-weight: bold;
    font-size: 30px;
`
const StContentsDiv = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
`






export default Home