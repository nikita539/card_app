import React from 'react';
import Card from "./card";
import 'regenerator-runtime/runtime'
import {apiMethods} from "../api";
import {useSelector, useDispatch} from "react-redux";
import { getGifActionCreator } from "../store/gifsreducer";
import {AppRootStateType} from "../store/store";

const CardContainer = () => {
    const gifs = useSelector<AppRootStateType>(state => state.gifs)
    const dispatch = useDispatch()
    React.useEffect(() => {
        apiMethods.getGifsSearch('Dog').then(response => dispatch(getGifActionCreator(response.data)))
    },[])
    console.log(['gifs',gifs])
    return (
        <div className='content-container'>
            <div className="card-container">
                {
                    gifs.length > 0
                        ? (gifs || []).map(i => <Card key={i.id} gifUrl={i.images.original.url} id={i.id} {...i}/>)
                        : <h1 className="card-container__warning-text">Nothing has been found</h1>
                }
            </div>
        </div>
    )
}

export default CardContainer;
