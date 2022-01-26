import React from 'react';

type cardPropsType = {
    gifUrl?: string
}

const Card = ({gifUrl = ''}: cardPropsType) => {
    return (
        <div className='card'>
            <img src={gifUrl} alt="Hello" style={{ width: '100%', height: '100%' }}/>
        </div>
    )
}

export default Card;
