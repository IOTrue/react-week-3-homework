import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import styled from "styled-components";
import ButtonDefault from './ButtonDefault';
import { FaPencilAlt } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import { __updateComments, __deleteComments, isGlobalDisabledToggle } from '../redux/modules/comment';
import useInput from '../hooks/useInput';

const CommentItem=({commentId, commentAuth, commentContent, paramId})=>{

    const dispatch = useDispatch()
    const [isEditCommentMode, setIsEditCommentMode] = useState(false)
    const [updateCommentContent, onChangeCommentEdit, setUpdateCommentContent] = useInput('')
    const {isDisabledToggle} = useSelector((state)=>state.comment)

    const onClickEditComment = ()=>{
        setUpdateCommentContent(commentContent)
        setIsEditCommentMode(true)
        dispatch(isGlobalDisabledToggle(true))
    }

    const onClickDeleteComment = (commentId)=>{
        dispatch(__deleteComments(commentId))
    }

    const onClickEditCommentCancle=()=>{
        setIsEditCommentMode(false)
        dispatch(isGlobalDisabledToggle(false))
    }
    const onClickEditCommentSave=()=>{
        if(updateCommentContent.trim() === ''){
            return alert('입력된 댓글 내용이 없습니다.')
        }
        const newComment={
            id:commentId,
            commentAuth,
            commentContent:updateCommentContent,
            paramId,
        }
        dispatch(__updateComments(newComment))
        setIsEditCommentMode(false)
        dispatch(isGlobalDisabledToggle(false))
    }
    
    return(
        <StCommentsItem>
            {!isEditCommentMode
            ?(  <>
                    <StCommentsItemInfo>
                        <StCommentsAuth>{commentAuth}</StCommentsAuth>
                        <StCommentsContent>{commentContent}</StCommentsContent>
                    </StCommentsItemInfo>
                    <StCommentsEditButtonBox>
                        <ButtonDefault onClick={()=>onClickEditComment(commentId)} disabled={isDisabledToggle}
                        hoverColor="#fff" borderRadius="10px" padding="10px" className="commentsButtonBox"><FaPencilAlt className="iconListTrash commentsIcon"/></ButtonDefault>
                        <ButtonDefault onClick={()=>onClickDeleteComment(commentId)} disabled={isDisabledToggle}
                        hoverColor="#fff" borderRadius="10px" padding="10px" className="commentsButtonBox"><BsFillTrashFill className="iconListTrash commentsIcon"/></ButtonDefault>
                    </StCommentsEditButtonBox>
                </>
            )
            :(
                <>
                <StCommentsItemInfo>
                    <StCommentsContentEditInput value={updateCommentContent} onChange={onChangeCommentEdit} autoFocus/>
                </StCommentsItemInfo>
                <StCommentsEditButtonBox>
                    <ButtonDefault onClick={()=>onClickEditCommentCancle(commentId)}
                    hoverColor="#525252" hoverFontColor="#fff" bgColor="#e2e2e2" borderRadius="10px" padding="10px" className="commentsButtonBox commentEditCancle">취소</ButtonDefault>
                    <ButtonDefault onClick={()=>onClickEditCommentSave()}
                    hoverColor="#f44408" hoverFontColor="#fff" bgColor="#ffac40" borderRadius="10px" padding="10px" className="commentsButtonBox commentEditSave">저장</ButtonDefault>
                </StCommentsEditButtonBox>
                </>
            )
            }
            
        </StCommentsItem>
    )
}

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
const StCommentsEditButtonBox = styled.div`
    display: flex;
    align-items: center;
`

const StCommentsContent = styled.span`
    font-weight: bold;
    width: 95%;
    background-color: transparent;
    border: none;
`
const StCommentsContentEditInput=styled.input`
    width: 90%;
    height: calc(100% - 12px);
    border: 1px solid #f44408;
    padding: 5px 10px;
`

const StCommentsAuth = styled.span`
    display: block;
    margin-bottom: 10px;
    font-size: 12px;
    background-color: transparent;
    border: none;
`
const StCommentsItemInfo = styled.div`
    width: 90%;
`






export default CommentItem