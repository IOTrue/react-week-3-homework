import React, {useEffect, useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import ButtonDefault from '../components/ButtonDefault';
import Comments from '../components/Comments';
import styled from "styled-components";
import { __getTodoDetail, __updateTodoDetail } from '../redux/modules/todoSlice';


function TodoListDetail() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const param = useParams()
    const paramId = parseInt(param.id)

    const [isEditMode, setIsEditMode] = useState(false)

    const [todoUpdateContent, setTodoUpdateContent] = useState('')
    const [todoUpdateTitle, setTodoUpdateTitle] = useState('')
    const todo = useSelector((state) => state.todo.todos);
   
    useEffect(()=>{
        dispatch(__getTodoDetail(paramId))
    }, [dispatch])

    useEffect(()=>{
        setTodoUpdateContent(todo.content)
        setTodoUpdateTitle(todo.title)
    },[todo])    
    const onClickNavigateHome = ()=>{
        navigate(-1)
    }
    
    const onClickTodoEdit = ()=>{ //수정버튼 클릭 시
        setIsEditMode(!isEditMode)
    }
    const onChangeEditTextarea=(e)=>{ //수정 textarea 값 저장
        setTodoUpdateContent(e.target.value)
    }
    const onChangeEditTitle=(e)=>{ //수정 title 값 저장
        setTodoUpdateTitle(e.target.value)
    }
    const onClickTodoEditSave=()=>{ //저장버튼 클릭시
        if(todoUpdateTitle.trim() === ''){
            return alert('입력된 제목이 없습니다.')
        }else if(todoUpdateContent.trim() === ''){
            return alert('입력된 내용이 없습니다.')
        }
        dispatch(__updateTodoDetail({...todo, title : todoUpdateTitle, content : todoUpdateContent}))
        setIsEditMode(false)
    }
  return (
    <div className="p-relative">
        <StTodoDetailWrap>
            <StTodoDetailBox>
                <BsFillArrowLeftCircleFill onClick={onClickNavigateHome}
                className="iconArrow iconPrevList" aria-label="이전 페이지로 이동"/>
                <span className="todoDetailDataSpan">ID : {todo.id}</span>
                <span className="todoDetailDataSpan">작성자 : {todo.auth}</span>
                {isEditMode
                ?   <>
                        <StUpdateTodoTitleInput value={todoUpdateTitle} onChange={onChangeEditTitle} autoFocus/>
                        <StUpdateTodoTextarea value={todoUpdateContent} onChange={onChangeEditTextarea}/>
                    </>
                :   <>
                        <span className="todoDetailDataSpan f-bold">{todo.title}</span>
                        <StGetTodoContentP>{todo.content}</StGetTodoContentP>
                    </>
                }
            </StTodoDetailBox>
            <StDivCenter>
                {!isEditMode
                ? <ButtonDefault onClick={onClickTodoEdit} padding="12px 80px" bgColor="#fa9370" hoverColor="#f44408" hoverFontColor="#fff">수정하기</ButtonDefault>
                : <ButtonDefault onClick={onClickTodoEditSave} padding="12px 80px" bgColor="lightgreen" hoverColor="seagreen" hoverFontColor="#fff">저장</ButtonDefault>
                }
            </StDivCenter>
        </StTodoDetailWrap>
        <div>
            <Comments></Comments>
        </div>
    </div>
  )
}

const StGetTodoContentP = styled.p`
    display: block;
    margin: 50px 0;
    overflow: hidden;
    height: 220px;
`

const StUpdateTodoTitleInput = styled.input`
    width: calc(100% - 20px);
    padding: 10px;
    font-size: 14px;
    font-weight: bold;
`

const StUpdateTodoTextarea = styled.textarea`
    width: calc(100% - 20px);
    height: 250px;
    padding: 15px 10px;
    font-size: 18px;
    resize: none;
    margin-top: 20px;
    border-radius: 10px;

`

const StTodoDetailWrap = styled.div`
    margin-bottom: 70px;
`

const StDivCenter = styled.div`
display: flex;
justify-content: center;
margin-top: 40px;
`

const StTodoDetailBox = styled.div`
    width: 80%;
    min-height: 60vh;
    padding: 20px;
    margin: 40px auto 0;
    border: 1px solid #ffac40;
`


export default TodoListDetail