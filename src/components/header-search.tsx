import React, {ChangeEvent, useState} from 'react'
import { useDispatch } from "react-redux";
import { getGifActionCreator } from "../store/gifsreducer";
import {apiMethods} from "../api";

const HeaderSearch = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState<string>('')
    const onSearchGifs = async () => {
        apiMethods.getGifsSearch(search).then((res) => {
            dispatch(getGifActionCreator(res.data))
            setSearch('')
        })
    }
    const onChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }
    return(
        <div className='header-search'>
            <div className='input-container'>
                <input
                    className='header-search__input'
                    placeholder='search something'
                    onChange={onChangeInput}
                    value={search}
                />
                <button
                    className='button-search'
                    onClick={() => onSearchGifs()}
                    disabled={!search}
                >Search</button>
            </div>
        </div>
    )
}

export default HeaderSearch;
