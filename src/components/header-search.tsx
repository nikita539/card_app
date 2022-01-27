import React from 'react'

const HeaderSearch = () => {
    return(
        <div className='header-search'>
            <div className='input-container'>
                <input className='header-search__input' placeholder='search something'/>
                <button className='button-search'>Search</button>
            </div>
        </div>
    )
}

export default HeaderSearch;
