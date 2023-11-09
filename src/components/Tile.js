import React, {useState} from "react";

function Tile({ hog }) {
    const [showDetails, setShowDetails] = useState(false)

    function handleClick() {
        setShowDetails(!showDetails)
    }

    return (
        <div className="ui eight wide column" >
            <p>{hog.name}</p>
            <img onClick={handleClick} style={{height : "150px", width: "auto"}} src={hog.image} alt={hog.name}></img>
            {showDetails ? (
                <div>
                    <p>Specialty: {hog.specialty}</p>
                    <p>Weight: {hog.weight}</p>
                    <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
                    <p>Highest Medal Achieved: {hog['highest medal achieved']}</p>
                </div>
                ) : null
            }
            
        </div>
    )
}

export default Tile;