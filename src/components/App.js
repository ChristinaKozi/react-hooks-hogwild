import React, {useState} from "react";
import Nav from "./Nav";
import Grid from "./Grid";
import Filter from "./Filter";
import Sort from "./Sort";

//import hogs from "../porkers_data"

function App() {
	const [isGreased, setIsGreased] = useState(undefined)
	const [sortingCriteria, setSortingCriteria] = useState('')

	return (
		<div className="App">
			<Nav />
			<Filter setIsGreased={setIsGreased} />
			<Sort setSortingCriteria={setSortingCriteria}/>
			<Grid isGreased={isGreased} sortingCriteria={sortingCriteria}/>
		</div>
	);
}

export default App;
