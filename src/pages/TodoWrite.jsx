import React , {useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import ButtonDefault from '../components/ButtonDefault';
import useInput from '../hooks/useInput';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { __addTodos } from '../redux/modules/todosSlice';


function TodoWrite() {
    const dispatch = useDispatch()

    let id = Date.now()

    const [auth, onChangeAuthHandler] = useInput('')
    const [title, onChangeTitleHandler] = useInput('')
    const [content, onChangeContentHandler] = useInput('')

    const [authMessage, setAuthMessage] = useState('5글자 이내로 입력하세요.')
    const [titleMessage, setTitleMessage] = useState('50글자 이내로 입력하세요.')
    const [contentMessage, setContentMessage] = useState('200글자 이내로 입력하세요.')

    const onBlurAuthMessage = ()=>{
        auth.trim().length > 5 || auth.trim() === "" ? setAuthMessage('5글자 이내로 입력하세요.') : setAuthMessage('올바른 입력 형식입니다.')
    }
    const onBlurTitleMessage = ()=>{
        title.trim().length > 50 || title.trim() === "" ? setTitleMessage('50글자 이내로 입력하세요.') : setTitleMessage('올바른 입력 형식입니다.')
    }
    const onBlurContentMessage = ()=>{
        content.trim().length > 200 || content.trim() === "" ? setContentMessage('200글자 이내로 입력하세요.') : setContentMessage('올바른 입력 형식입니다.')
    }
    const navigate = useNavigate()
    const onSubmitTodoHandler = (e)=>{
        e.preventDefault()
        const newTodoItem = {
            id,
            auth,
            title,
            content
        }
        dispatch(__addTodos(newTodoItem))
        navigate('/todoList')
    }

    const onClickNavigateHome = ()=>{
        navigate('/')
    }

  return (
    <StPositionBox>
        <StTodoWriteBox onSubmit={onSubmitTodoHandler}>
            <StLabelInput htmlfor="todoInputAuth">작성자</StLabelInput>
            <StTodoInput onChange={onChangeAuthHandler} onBlur={onBlurAuthMessage} value={auth} type="text" id="todoInputAuth" placeholder="이름을 입력하세요 (5자 이내)" maxLength="5" autoFocus required></StTodoInput>
            <span>{authMessage}</span>
            <StLabelInput htmlfor="todoInputTitle">제목</StLabelInput>
            <StTodoInput onChange={onChangeTitleHandler} onBlur={onBlurTitleMessage} value={title} type="text" id="todoInputTitle" placeholder="제목을 입력하세요 (50자 이내)" maxLength="50" required></StTodoInput>
            <span>{titleMessage}</span>
            <StLabelInput htmlfor="todoInputContent">내용</StLabelInput>
            <StTodoTextarea onChange={onChangeContentHandler} onBlur={onBlurContentMessage} value={content} id="todoInputContent" placeholder="내용을 입력하세요 (200자 이내)" maxLength="200" required></StTodoTextarea>
            {<span>{contentMessage}</span>}
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