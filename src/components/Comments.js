import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import ButtonDefault from './ButtonDefault';
import { FaPencilAlt } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import { __addComments, __getComments, __deleteComments } from '../redux/modules/comment';
import useInput from '../hooks/useInput';

function Comments() {
    const dispatch = useDispatch()
    const param = useParams()
    const paramId = parseInt(param.id)

    const comments = useSelector((state)=>state.comment.comments)
    const [commentActive, setCommentActive] = useState(true)

    const [commentAuth, onChangeCommentAuth, setCommentAuth] = useInput('')
    const [commentContent, onChangeCommentContent, setCommentContent] = useInput('')

    const onClickCommentBoxToggle = ()=>{
        setCommentActive(!commentActive)
    }

    const onSubmitAddCommentHandler=(e)=>{
        e.preventDefault()
        const newComment={
            id:Date.now(),
            commentAuth,
            commentContent,
            paramId
        }
        dispatch(__addComments(newComment))
        setCommentAuth('')
        setCommentContent('')
    }

    useEffect(()=>{
        dispatch(__getComments(paramId))
    },[dispatch])    

    const onClickDeleteComment = async (commentId)=>{
        dispatch(__deleteComments(commentId))
    }

    const CommentItem=({commentId, commentAuth, commentContent})=>{
        return(
            <StCommentsItem>
                <StCommentsItemInfo>
                    <StCommentsAuth>{commentAuth}</StCommentsAuth>
                    <StCommentsContent>{commentContent}</StCommentsContent>
                </StCommentsItemInfo>
                <StCommentsEditButtonBox>
                    <ButtonDefault hoverColor="#fff" borderRadius="10px" padding="10px" className="commentsButtonBox"><FaPencilAlt className="iconListTrash commentsIcon"/></ButtonDefault>
                    <ButtonDefault onClick={()=>onClickDeleteComment(commentId)}
                    hoverColor="#fff" borderRadius="10px" padding="10px" className="commentsButtonBox"><BsFillTrashFill className="iconListTrash commentsIcon"/></ButtonDefault>
                </StCommentsEditButtonBox>
            </StCommentsItem>
        )
    }

  return (
    <StCommnetsBoxWrap className={`commentBoxWrap ${commentActive ? 'boxOff' : 'boxOn'}`}>
        <ButtonDefault onClick={onClickCommentBoxToggle} fontDefaultColor="#fff" bgColor="seagreen" className="commentButton" padding="12px 40px" hoverColor="#ffac40" hoverFontColor="#fff">댓글 {commentActive ? '열기' : '닫기'}</ButtonDefault>
        <StCommentsBox>
            <StCommentsForm onSubmit={onSubmitAddCommentHandler}>
                <StCommentsInput onChange={onChangeCommentAuth} value={commentAuth} placeholder="이름(5자 이내)" maxLength="5" required />
                <StCommentsInput onChange={onChangeCommentContent} value={commentContent} className="StCommentsInputContent" placeholder="댓글 내용(100자 이내)" maxLength="100" required />
                <ButtonDefault padding="10px 30px" hoverColor="#ffac40" hoverFontColor="#fff">추가하기</ButtonDefault>
            </StCommentsForm>
            <StCommentsList>
                {comments?.map((comment)=>{
                    return(
                        <CommentItem key={comment.id}
                        commentAuth={comment.commentAuth}
                        commentContent={comment.commentContent}
                        commentId={comment.id}>
                        </CommentItem>
                    )
                })}
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