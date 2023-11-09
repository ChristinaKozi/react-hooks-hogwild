import React, { useEffect } from "react";
import Tile from "./Tile";
import hogs from "../porkers_data"

function Grid({ isGreased, sortingCriteria}) {
    
    let results = hogs.filter((hog) => {
        if (!isGreased) {
            return true
        } else if (hog.greased === isGreased) {
            return true
        }
    })

    if (sortingCriteria === "name") {
        results.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortingCriteria === "weight") {
        results.sort((a, b) => a.weight - b.weight);
      }

    return (
        <div className="ui grid container">
            {results.map(hog => {
                return <Tile key={hog.name} hog={hog} />
            })}
        </div>
    )
}

export default Grid;