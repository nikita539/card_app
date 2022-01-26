import React from 'react';
import Card from "./card";
import 'regenerator-runtime/runtime'

const API_KEY = 'pium5ayLlX75gfIKmNYkuJx6DbczwilI'

const CardContainer = () => {
    const [cards, setCards] = React.useState()

    const getGifs = async (search: string): Promise<any> => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=25&offset=0&rating=g&lang=en`
        return await fetch(url).then(response => response.json())
    }
    React.useEffect(() => {
        getGifs('hello').then((data) => setCards(data.data))
    },[])
    console.log(cards)
    return (
        <div className='content__container'>
            <div className="card__container">
                {(cards || []).map(i => <Card key={i} gifUrl={i.images.original.url}/>)}
            </div>
        </div>
    )
}

export default CardContainer;
