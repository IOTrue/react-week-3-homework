import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { BsFillTrashFill } from "react-icons/bs";
import ButtonDefault from '../components/ButtonDefault';




function TodoList() {
  return (
    <StTodoListBox>
      <StH2>2023 Todo List</StH2>
      <StTodoUl>
      <StTodoItem> 
        <Link to="/todoListDetail/1" className="linkTodoItem">
          <StTodoListItemDiv>
            <StTodoTitleSpan>제목</StTodoTitleSpan>
            <StTodoAuthSpan>작성자 : 작성자1</StTodoAuthSpan>
          </StTodoListItemDiv>
          <ButtonDefault hoverColor="#fff" borderRadius="10px" padding="10px" className="buttonListTrash"><BsFillTrashFill className="iconListTrash"/></ButtonDefault>
        </Link>
      </StTodoItem>
      <StTodoItem> 
        <Link to="/todoListDetail/1" className="linkTodoItem">
          <StTodoListItemDiv>
            <StTodoTitleSpan>제목</StTodoTitleSpan>
            <StTodoAuthSpan>작성자 : 작성자1</StTodoAuthSpan>
          </StTodoListItemDiv>
          <ButtonDefault hoverColor="#fff" borderRadius="10px" padding="10px" className="buttonListTrash"><BsFillTrashFill className="iconListTrash"/></ButtonDefault>
        </Link>
      </StTodoItem>
      <StTodoItem> 
        <Link to="/todoListDetail/1" className="linkTodoItem">
          <StTodoListItemDiv>
            <StTodoTitleSpan>제목</StTodoTitleSpan>
            <StTodoAuthSpan>작성자 : 작성자1</StTodoAuthSpan>
          </StTodoListItemDiv>
          <ButtonDefault hoverColor="#fff" borderRadius="10px" padding="10px" className="buttonListTrash"><BsFillTrashFill className="iconListTrash"/></ButtonDefault>
        </Link>
      </StTodoItem>
      <StTodoItem> 
        <Link to="/todoListDetail/1" className="linkTodoItem">
          <StTodoListItemDiv>
            <StTodoTitleSpan>제목</StTodoTitleSpan>
            <StTodoAuthSpan>작성자 : 작성자1</StTodoAuthSpan>
          </StTodoListItemDiv>
          <ButtonDefault hoverColor="#fff" borderRadius="10px" padding="10px" className="buttonListTrash"><BsFillTrashFill className="iconListTrash"/></ButtonDefault>
        </Link>
      </StTodoItem>
      <StTodoItem> 
        <Link to="/todoListDetail/1" className="linkTodoItem">
          <StTodoListItemDiv>
            <StTodoTitleSpan>제목</StTodoTitleSpan>
            <StTodoAuthSpan>작성자 : 작성자1</StTodoAuthSpan>
          </StTodoListItemDiv>
          <ButtonDefault hoverColor="#fff" borderRadius="10px" padding="10px" className="buttonListTrash"><BsFillTrashFill className="iconListTrash"/></ButtonDefault>
        </Link>
      </StTodoItem>
      </StTodoUl>
    </StTodoListBox>
  )
}


const StTodoListItemDiv = styled.div`
  display: flex;
  flex-direction: column;
`
const StTodoListBox = styled.div`
  padding: 70px 40px;
`
const StTodoTitleSpan = styled.span`
  font-weight: bold;
  display: block;
`
const StTodoAuthSpan = styled.span`
  display: block;
  margin-top: 10px;
  font-size: 12px;
`
const StH2 = styled.h2`
  font-weight: bold;
  font-size: 30px;
`
const StTodoUl = styled.ul`
  margin-top: 50px;
`
const StTodoItem = styled.li`
  border: 1px solid #ffe7d3;
  border-radius: 10px;
  height: 80px;
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;
  :hover{
    transform: scale(1.01);
    transition: 0.2s;
    background-color: #ffe7d3;
  }
`





export default TodoList