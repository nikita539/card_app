import React, {Dispatch, SetStateAction} from "react";

type togglePropsType = {
    title?: string,
    setShowLiked: Dispatch<SetStateAction<boolean>>,
}

const Toggle = ({title, setShowLiked}:togglePropsType) => {
    return (
        <div className="toggle">
            <label className="toggle__switch">
                <input type="checkbox" onChange={() => setShowLiked(prevState => !prevState)}/>
                <span className="toggle__slider round"/>
            </label>
            <span>{title}</span>
        </div>
    )
}

export default Toggle;
