import React from "react";

function Sort( {setSortingCriteria} ) {
    let selectedValue
    function sortHogs(value){
        setSortingCriteria(value)
        selectedValue = value
    }

    return (
        <div style={{margin: '20px'}}> 
            <select value={selectedValue} onChange={(e) => sortHogs(e.target.value)}>
                <option value="">Sort By</option>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
             </select>
        </div>
)}

export default Sort