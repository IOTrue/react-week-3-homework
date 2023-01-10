import React from 'react'
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import ButtonDefault from '../components/ButtonDefault';
import useInput from '../hooks/useInput';
import { useNavigate } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import {addTodoList} from '../redux/modules/todosSlice'


function TodoWrite() {
    const dispatch = useDispatch()
    const [auth, onChangeAuthHandler] = useInput('')
    const [title, onChangeTitleHandler] = useInput('')
    const [content, onChangeContentHandler] = useInput('')

    const navigate = useNavigate()
    const onSubmitTodoHandler = (e)=>{
        e.preventDefault()
        const newTodoItem = {
            auth,
            title,
            content
        }
        dispatch(addTodoList(newTodoItem))
    }
   
    const onClickNavigateHome = ()=>{
        navigate('/')
    }

  return (
    <StPositionBox>
        <StTodoWriteBox onSubmit={onSubmitTodoHandler}>
            <StLabelInput for="todoInputAuth">작성자</StLabelInput>
            <StTodoInput onChange={onChangeAuthHandler} value={auth} type="text" id="todoInputAuth" placeholder="이름을 입력하세요 (5자 이내)" required></StTodoInput>
            <StLabelInput for="todoInputTitle">제목</StLabelInput>
            <StTodoInput onChange={onChangeTitleHandler} value={title} type="text" id="todoInputTitle" placeholder="제목을 입력하세요 (50자 이내)" required></StTodoInput>
            <StLabelInput for="todoInputContent">내용</StLabelInput>
            <StTodoTextarea onChange={onChangeContentHandler} value={content} id="todoInputContent" placeholder="내용을 입력하세요 (200자 이내)" required></StTodoTextarea>
            <StDivCenter>
                <ButtonDefault padding="12px 80px"
                bgColor="#fa9370" hoverColor="#f44408" hoverFontColor="#fff"
                >추가하기</ButtonDefault>
            </StDivCenter>
        </StTodoWriteBox>
        <BsFillArrowLeftCircleFill onClick={onClickNavigateHome}
        className="iconArrow prevIcon" aria-label="이전 페이지로 이동"/>
    </StPositionBox>
  )
}

const StPositionBox = styled.div`
    position: relative;
    border: 1px solid #fa9370;
    padding: 50px 40px 40px;
    width: 40%;
    min-width: 500px;
    margin: 80px auto 100px;
`
const StTodoWriteBox = styled.form`
    
`
const StLabelInput = styled.label`
    display: block;
    margin: 20px 0;
    font-weight: bold;
    font-size: 20px;
`
const StTodoInput = styled.input`
    border: 1px solid #d2d2d2;
    border-radius: 10px;
    width: 96%;
    height: 40px;
    padding: 0 2%;
    margin-bottom: 10px;
`
const StTodoTextarea = styled.textarea`
    display: block;
    width: 96%;
    height: 80px;
    padding: 2%;
    margin-bottom: 20px;
    border: 1px solid #d2d2d2;
    border-radius: 10px;
    resize: none;
`
const StDivCenter = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`


export default TodoWrite