import React, {useMemo} from 'react';
import Card from "./card";
import 'regenerator-runtime/runtime'
import {apiMethods} from "../api";
import {useSelector, useDispatch} from "react-redux";
import { getGifActionCreator } from "../store/gifsreducer";
import {AppRootStateType} from "../store/store";

type cardContainerProps = {
    showLiked: boolean,
}

const CardContainer = ({ showLiked }: cardContainerProps) => {
    const gifs = useSelector<AppRootStateType>(state => state.gifs)
    const dispatch = useDispatch()
    React.useEffect(() => {
        apiMethods.getGifsSearch('Dog').then(response => dispatch(getGifActionCreator(response.data)))
    },[])
    const sortedCards = useMemo(() => (
        showLiked ?
            gifs.map(i => { if(i.isLiked) return <Card {...i} key={i.id} gifUrl={i.images.original.url}/>})
            :  (gifs || []).map(i => <Card key={i.id} gifUrl={i.images.original.url} id={i.id} {...i}/>)
    ), [showLiked, gifs])

    return (
        <div className='content-container'>
            <div className="card-container">
                {
                    gifs.length > 0
                        ? sortedCards
                        : <h1 className="card-container__warning-text">Nothing has been found</h1>
                }
            </div>
        </div>
    )
}

export default CardContainer;
