import React, {useState} from 'react';
import CardContainer from "./card-container";
import HeaderSearch from "./header-search";

const App = () => {
    return (
        <div>
            <HeaderSearch/>
            <CardContainer/>
        </div>
    )
}

export default App;
