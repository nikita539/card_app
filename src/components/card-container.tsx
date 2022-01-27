import React from 'react';
import Card from "./card";
import 'regenerator-runtime/runtime'
import {apiMethods} from "../api";

const CardContainer = () => {
    const [cards, setCards] = React.useState()
    React.useEffect(() => {
        apiMethods.getGifsSearch('Dog').then(response => setCards(response.data))
    },[])
    return (
        <div className='content-container'>
            <div className="card-container">
                {(cards || []).map(i => <Card key={i} gifUrl={i.images.original.url}/>)}
            </div>
        </div>
    )
}

export default CardContainer;
