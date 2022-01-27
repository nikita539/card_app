import React from 'react';
import { deleteGifActionType } from "../store/gifsreducer";
import { useDispatch } from "react-redux";

type cardPropsType = {
    gifUrl?: string
    id: string,
}

const Card = ({gifUrl = '', id}: cardPropsType) => {
    const dispatch = useDispatch()
    const onDeleteCard = () => {
        dispatch(deleteGifActionType(id))
    }
    return (
        <div
            className='card'
            onClick={onDeleteCard}
        >
            <img src={gifUrl} alt="Hello" style={{ width: '100%', height: '100%' }}/>
        </div>
    )
}

export default Card;
