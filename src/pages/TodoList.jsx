import React , {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { BsFillTrashFill } from "react-icons/bs";
import ButtonDefault from '../components/ButtonDefault';
import { __getTodos, __deleteTodos } from '../redux/modules/todosSlice';

function TodoList() {

  const dispatch = useDispatch()

  const { isLoading, error, todos } = useSelector((state) => state.todos);
  useEffect(()=>{
    dispatch(__getTodos())
  }, [dispatch])

  const onClickTodoDeleteHandler = async (todoId)=> {
    dispatch(__deleteTodos(todoId))
  }
  const TodoItem = ({todoId, todoAuth, todoTitle})=> {
    return( 
      <StTodoItem> 
        <Link to={`/todoListDetail/${todoId}`} className="linkTodoItem">
          <StTodoListItemDiv>
            <StTodoTitleSpan>{todoTitle}</StTodoTitleSpan>
            <StTodoAuthSpan>작성자 : {todoAuth}</StTodoAuthSpan>
          </StTodoListItemDiv>
        </Link>
        <ButtonDefault onClick={()=>onClickTodoDeleteHandler(todoId)}
          hoverColor="#fff" borderRadius="10px" padding="10px" className="buttonListTrash"><BsFillTrashFill className="iconListTrash"/></ButtonDefault>
      </StTodoItem>
    )
  }

  return (
    <StTodoListBox>
      <StH2>2023 Todo List</StH2>
      <StTodoUl>
        {isLoading && <div>로딩 중</div>}
        {error && <div>error</div>}
        {todos?.map((todo)=>{
          return(
            <TodoItem key={todo.id} todoId={todo.id} todoAuth={todo.auth} todoTitle={todo.title} />
          )
        })}
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
  margin-bottom: 100px;
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