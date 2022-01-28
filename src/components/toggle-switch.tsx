import React from "react";

type togglePropsType = {
    title?: string
}

const Toggle = ({title}:togglePropsType) => {
    return (
        <div className="toggle">
            <label className="toggle__switch">
                <input type="checkbox"/>
                <span className="toggle__slider round"/>
            </label>
            <span>{title}</span>
        </div>
    )
}

export default Toggle;
