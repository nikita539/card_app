import React, {useState} from 'react';
import CardContainer from "./card-container";
import HeaderSearch from "./header-search";

const App = () => {
    const [showLiked, setShowLiked] = useState<boolean>(false)
    return (
        <div>
            <HeaderSearch
                setShowLiked={setShowLiked}
                showLiked={showLiked}
            />
            <CardContainer
                showLiked={showLiked}
            />
        </div>
    )
}

export default App;
