import React from "react";


function Filter({setIsGreased}) {
    
    function handleClick(e) {
        setIsGreased(e.target.checked)
    }
    
    return (
        <div>
            <input onClick={((e) => { handleClick(e) })} style={{ margin: "20px" }} type="checkbox"></input>
            <label>isGreased?</label>
        </div>
    )
}

export default Filter;