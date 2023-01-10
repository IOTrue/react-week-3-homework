import React from 'react'
import styled from "styled-components";
import ButtonDefault from './ButtonDefault';
import { FaPencilAlt } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";


function Comments() {
  return (
    <StCommnetsBoxWrap className="commentBoxWrap boxOn">
        <ButtonDefault fontDefaultColor="#fff" bgColor="seagreen" className="commentButton" padding="8px 18px" hoverColor="#ffac40" hoverFontColor="#fff">댓글 닫기</ButtonDefault>
        <StCommentsBox>
            <StCommentsForm>
                <StCommentsInput placeholder="이름(5자 이내)" required/>
                <StCommentsInput className="StCommentsInputContent" placeholder="댓글 내용(100자 이내)" required />
                <ButtonDefault padding="10px 30px" hoverColor="#ffac40" hoverFontColor="#fff">추가하기</ButtonDefault>
            </StCommentsForm>
            <StCommentsList>
                <StCommentsItem>
                    <StCommentsItemInfo>
                        <StCommentsAuth>작성자</StCommentsAuth>
                        <StCommentsContent>내용내용내용내용내용</StCommentsContent>
                    </StCommentsItemInfo>
                    <StCommentsEditButtonBox>
                        <ButtonDefault hoverColor="#fff" borderRadius="10px" padding="10px" className="commentsButtonBox"><FaPencilAlt className="iconListTrash commentsIcon"/></ButtonDefault>
                        <ButtonDefault hoverColor="#fff" borderRadius="10px" padding="10px" className="commentsButtonBox"><BsFillTrashFill className="iconListTrash commentsIcon"/></ButtonDefault>
                    </StCommentsEditButtonBox>
                </StCommentsItem>
                <StCommentsItem>
                    <StCommentsItemInfo>
                        <StCommentsAuth>작성자</StCommentsAuth>
                        <StCommentsContent>내용내용내용내용내용</StCommentsContent>
                    </StCommentsItemInfo>
                    <StCommentsEditButtonBox>
                        <ButtonDefault hoverColor="#fff" borderRadius="10px" padding="10px" className="commentsButtonBox"><FaPencilAlt className="iconListTrash commentsIcon"/></ButtonDefault>
                        <ButtonDefault hoverColor="#fff" borderRadius="10px" padding="10px" className="commentsButtonBox"><BsFillTrashFill className="iconListTrash commentsIcon"/></ButtonDefault>
                    </StCommentsEditButtonBox>
                </StCommentsItem>
                <StCommentsItem>
                    <StCommentsItemInfo>
                        <StCommentsAuth>작성자</StCommentsAuth>
                        <StCommentsContent>내용내용내용내용내용</StCommentsContent>
                    </StCommentsItemInfo>
                    <StCommentsEditButtonBox>
                        <ButtonDefault hoverColor="#fff" borderRadius="10px" padding="10px" className="commentsButtonBox"><FaPencilAlt className="iconListTrash commentsIcon"/></ButtonDefault>
                        <ButtonDefault hoverColor="#fff" borderRadius="10px" padding="10px" className="commentsButtonBox"><BsFillTrashFill className="iconListTrash commentsIcon"/></ButtonDefault>
                    </StCommentsEditButtonBox>
                </StCommentsItem>
                <StCommentsItem>
                    <StCommentsItemInfo>
                        <StCommentsAuth>작성자</StCommentsAuth>
                        <StCommentsContent>내용내용내용내용내용</StCommentsContent>
                    </StCommentsItemInfo>
                    <StCommentsEditButtonBox>
                        <ButtonDefault hoverColor="#fff" borderRadius="10px" padding="10px" className="commentsButtonBox"><FaPencilAlt className="iconListTrash commentsIcon"/></ButtonDefault>
                        <ButtonDefault hoverColor="#fff" borderRadius="10px" padding="10px" className="commentsButtonBox"><BsFillTrashFill className="iconListTrash commentsIcon"/></ButtonDefault>
                    </StCommentsEditButtonBox>
                </StCommentsItem>
                <StCommentsItem>
                    <StCommentsItemInfo>
                        <StCommentsAuth>작성자</StCommentsAuth>
                        <StCommentsContent>내용내용내용내용내용</StCommentsContent>
                    </StCommentsItemInfo>
                    <StCommentsEditButtonBox>
                        <ButtonDefault hoverColor="#fff" borderRadius="10px" padding="10px" className="commentsButtonBox"><FaPencilAlt className="iconListTrash commentsIcon"/></ButtonDefault>
                        <ButtonDefault hoverColor="#fff" borderRadius="10px" padding="10px" className="commentsButtonBox"><BsFillTrashFill className="iconListTrash commentsIcon"/></ButtonDefault>
                    </StCommentsEditButtonBox>
                </StCommentsItem>
                <StCommentsItem>
                    <StCommentsItemInfo>
                        <StCommentsAuth>작성자</StCommentsAuth>
                        <StCommentsContent>내용내용내용내용내용</StCommentsContent>
                    </StCommentsItemInfo>
                    <StCommentsEditButtonBox>
                        <ButtonDefault hoverColor="#fff" borderRadius="10px" padding="10px" className="commentsButtonBox"><FaPencilAlt className="iconListTrash commentsIcon"/></ButtonDefault>
                        <ButtonDefault hoverColor="#fff" borderRadius="10px" padding="10px" className="commentsButtonBox"><BsFillTrashFill className="iconListTrash commentsIcon"/></ButtonDefault>
                    </StCommentsEditButtonBox>
                </StCommentsItem>
                <StCommentsItem>
                    <StCommentsItemInfo>
                        <StCommentsAuth>작성자</StCommentsAuth>
                        <StCommentsContent>내용내용내용내용내용</StCommentsContent>
                    </StCommentsItemInfo>
                    <StCommentsEditButtonBox>
                        <ButtonDefault hoverColor="#fff" borderRadius="10px" padding="10px" className="commentsButtonBox"><FaPencilAlt className="iconListTrash commentsIcon"/></ButtonDefault>
                        <ButtonDefault hoverColor="#fff" borderRadius="10px" padding="10px" className="commentsButtonBox"><BsFillTrashFill className="iconListTrash commentsIcon"/></ButtonDefault>
                    </StCommentsEditButtonBox>
                </StCommentsItem>
                <StCommentsItem>
                    <StCommentsItemInfo>
                        <StCommentsAuth>작성자</StCommentsAuth>
                        <StCommentsContent>내용내용내용내용내용</StCommentsContent>
                    </StCommentsItemInfo>
                    <StCommentsEditButtonBox>
                        <ButtonDefault hoverColor="#fff" borderRadius="10px" padding="10px" className="commentsButtonBox"><FaPencilAlt className="iconListTrash commentsIcon"/></ButtonDefault>
                        <ButtonDefault hoverColor="#fff" borderRadius="10px" padding="10px" className="commentsButtonBox"><BsFillTrashFill className="iconListTrash commentsIcon"/></ButtonDefault>
                    </StCommentsEditButtonBox>
                </StCommentsItem>
            </StCommentsList>
        </StCommentsBox>
    </StCommnetsBoxWrap>
  )
}

const StCommentsEditButtonBox = styled.div`
    display: flex;
`

const StCommentsContent = styled.span`
    font-weight: bold;
`

const StCommentsAuth = styled.span`
    display: block;
    margin-bottom: 10px;
    font-size: 12px;
`
const StCommentsItemInfo = styled.div`
    width: 90%;
`

const StCommentsList = styled.div`
    height: calc(100% - 70px);
    margin-top: 20px;
    border-top: 1px solid #e2e2e2;
    padding: 0 10px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
    width: 10px;
}
    ::-webkit-scrollbar-track {
        background-color: #fa9370;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #f44408;
        border-radius: 10px;
    }

`
const StCommentsItem = styled.div`
    display: flex;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #d2d2d2;
    justify-content: space-between;
    flex-grow: 2 1;
    :hover{
        background-color: #ffe7d3;
    }
`
const StCommentsInput = styled.input`
    border: 1px solid #a1a1a1;
    border-radius: 10px;
    background-color: transparent;
    padding: 10px;
    color: #000;
    ::placeholder{
        color: #a1a1a1;
    }
`
const StCommentsForm = styled.form`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    gap: 10px;
`
const StCommnetsBoxWrap = styled.div`
    position: fixed;
    width: 100%;
    height: 450px;
`
const StCommentsBox = styled.div`
    border: 1px solid #d2d2d2;
    background-color: #fff;
    padding: 15px;
    height: calc(100% - 66px);
`







export default Comments