import React from 'react';
import PropTypes from 'prop-types';

export function Page({ year, photos, getPhotos, isFetching }) {
	const yearClickHandler = e => {
		const year = +e.currentTarget.innerText;
		getPhotos(year);
	};

	const years = [2014, 2015, 2016, 2017, 2018];

	return (
		<div className="ib page">
			<p>
				{years.map(year => {
					return (
						<button key={year} onClick={yearClickHandler} className="btn ">
							{year}
						</button>
					);
				})}
			</p>
			<h3>{year}</h3>
			{isFetching ? <p>Loading...</p> : <p>You have {photos.length} photos.</p>}
		</div>
	);
}

Page.propTypes = {
	year: PropTypes.number.isRequired,
	photos: PropTypes.array.isRequired,
	getPhotos: PropTypes.func.isRequired,
};
