import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import Review from './Review';
function App() {
	const [ people, setPeople ] = useState(data);
	const [ index, setIndex ] = useState(0);
	return (
		<article className="section">
			<div className="title">
				<h2>
					<span>/</span>reviews
				</h2>
			</div>
			<div className="section-center">
				<Review people={people} />
			</div>
		</article>
	);
}
export default App;
