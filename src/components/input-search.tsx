import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react'
import {useDispatch} from "react-redux";
import { getGifActionCreator } from "../store/gifsreducer";
import {apiMethods} from "../api";


const InputSearch = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState<string>('')
    const onSearchGifs = async () => {
        apiMethods.getGifsSearch(search).then((res) => {
            dispatch(getGifActionCreator([]))
            setTimeout(() => dispatch(getGifActionCreator(res.data)), 500)
            setSearch('')
        })
    }
    const onChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }
    return (
        <div className='input-container'>
            <input
                className='header-search__input'
                placeholder='search something'
                onChange={onChangeInput}
                onKeyPress={(e) => {
                    if (e.key === "Enter" && search) {
                        onSearchGifs()
                    }
                }}
                value={search}
            />
            <button
                className='button-search'
                onClick={() => onSearchGifs()}
                disabled={!search}
            >Search</button>
        </div>
    )
}

export default InputSearch;
