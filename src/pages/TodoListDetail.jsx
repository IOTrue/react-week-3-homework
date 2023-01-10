import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import ButtonDefault from '../components/ButtonDefault';
import Comments from '../components/Comments';
import styled from "styled-components";



function TodoListDetail() {
    const navigate = useNavigate()
    const onClickNavigateHome = ()=>{
        navigate(-1)
    }


  return (
    <div className="p-relative">
        <StTodoDetailWrap>
            <StTodoDetailBox>
                <BsFillArrowLeftCircleFill onClick={onClickNavigateHome}
                className="iconArrow iconPrevList" aria-label="이전 페이지로 이동"/>
                <span className="todoDetailDataSpan">ID : id</span>
                <span className="todoDetailDataSpan f-bold">title</span>
                <span className="todoDetailDataSpan">작성자 : 작성자</span>
                <span className="todoDetailDataSpan">내용</span>
            </StTodoDetailBox>
            <StDivCenter>
                <ButtonDefault padding="12px 80px"
                bgColor="#fa9370" hoverColor="#f44408" hoverFontColor="#fff"
                >수정하기</ButtonDefault>
            </StDivCenter>
        </StTodoDetailWrap>
        <div>
            <Comments></Comments>
        </div>
    </div>
  )
}

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