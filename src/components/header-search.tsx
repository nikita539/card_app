import React, {Dispatch, SetStateAction} from 'react'
import InputSearch from "./input-search";
import Toggle from "./toggle-switch";

type headerSearchTypeProps = {
    setShowLiked: Dispatch<SetStateAction<boolean>>,
    showLiked: boolean,
}

const HeaderSearch = ({ setShowLiked }:headerSearchTypeProps) => {
    return(
        <div className='header-search'>
            <Toggle
                title={"Liked"}
                setShowLiked={setShowLiked}
            />
            <InputSearch/>
            <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" fill="#ffff" id="Outline" viewBox="0 0 24 24" width="20" height="20">
                <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"/>
            </svg>
        </div>
    )
}

export default HeaderSearch;
