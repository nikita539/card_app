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
    return (
        <div className='content-container'>
            <div className="card-container">
                {(gifs || []).map(i => <Card gifUrl={i.images.original.url} id={i.id}/>)}
            </div>
        </div>
    )
}

export default CardContainer;
