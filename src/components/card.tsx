import React from 'react';
import { deleteGifActionType, likedCardAC } from "../store/gifsreducer";
import { useDispatch } from "react-redux";

type cardPropsType = {
    gifUrl?: string
    id: string,
    isLiked: boolean
}

const Card = ({gifUrl = '', id, isLiked}: cardPropsType) => {
    const dispatch = useDispatch()
    const onDeleteCard = () => {
        dispatch(deleteGifActionType(id))
    }
    const onLikeCard = () => {
        dispatch(likedCardAC(id))
    }
    return (
        <div
            className='card'
        >
            <div className="card__icons">
                <svg className="delete-icon" onClick={onDeleteCard} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20">
                    <path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"/>
                    <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"/>
                    <path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/>
                </svg>
                {isLiked ?
                    <svg className="like-icon-bg" onClick={onLikeCard} xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="20" height="20">
                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"/>
                    </svg>
                    : <svg className="like-icon" onClick={onLikeCard} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20">
                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"/>
                    </svg>
                }
            </div>
            <img src={gifUrl} alt="Hello" className='gif'/>
            <div className="card__description">
                <h1 className="card__title">Hello World</h1>
                <p className="card__additional-text">afafagsdgsfhsdfhfdhdfhdfhjefhjf</p>
            </div>
        </div>
    )
}

export default Card;
