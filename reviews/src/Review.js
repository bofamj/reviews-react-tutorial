import React, { useState, useEffect } from 'react';
import data from './data';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import './index.css';

function Review({ people }) {
	const [ index, setIndex ] = useState(0);
	return (
		<div className="section-center">
			{people.map((person, personIndex) => {
				const { id, image, title, name, quote } = person;
				let position = 'lastSlide';
				if (personIndex === index) {
					position = 'activeSlide';
				}
				if (index < 0) {
					setIndex(people.length - 1);
				}
				if (index > people.length - 1) {
					setIndex(0);
				}
				return (
					<article className={position} key={id}>
						<img src={image} alt={name} className="person-img" />
						<h4>{name}</h4>
						<p className="title">{title}</p>
						<p className="text">{quote}</p>
						<FaQuoteRight className="icon" />
					</article>
				);
			})}
			<button className="prev" onClick={() => setIndex(index - 1)}>
				<FiChevronLeft />
			</button>
			<button className="next" onClick={() => setIndex(index + 1)}>
				<FiChevronRight />
			</button>
		</div>
	);
}
export default Review;
