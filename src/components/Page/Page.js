import React from 'react';
import PropTypes from 'prop-types';

export function Page({ year, photos, setYear }) {
	const yearClickHandler = e => {
		const year = +e.currentTarget.innerText;
		setYear(year);
	};

	const years = [2014, 2015, 2016, 2017, 2018];

	return (
		<div>
			<div>
				{years.map(year => {
					return (
						<button key={year} onClick={yearClickHandler}>
							{year}
						</button>
					);
				})}
			</div>
			<p>
				You have {photos.length} photos in {year} year
			</p>
		</div>
	);
}

Page.propTypes = {
	year: PropTypes.number.isRequired,
	photos: PropTypes.array.isRequired,
	setYear: PropTypes.func.isRequired,
};
