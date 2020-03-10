import React from 'react';
import PropTypes from 'prop-types';

export function Page({ year, photos, getPhotos, isFetching, error }) {
	const yearClickHandler = e => {
		const year = +e.currentTarget.innerText;
		getPhotos(year);
	};

	const years = [2014, 2015, 2016, 2017, 2018];

	const getTemplate = () => {
		if (error) {
			return <p className="error">Во время загрузки фото произошла ошибка</p>;
		}

		if (isFetching) {
			return <p>Загрузка...</p>;
		}

		return (
			<div className="photos">
				{photos.map(entry => (
					<div key={entry.id} className="photo">
						<p>
							<img src={entry.sizes[0].url} alt="" />
						</p>
						<p>{entry.likes.count} ❤</p>
					</div>
				))}
			</div>
		);
	};

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
			<h3>
				{year} [{photos.length}]
			</h3>
			{getTemplate()}
		</div>
	);
}

Page.propTypes = {
	year: PropTypes.number.isRequired,
	photos: PropTypes.array.isRequired,
	getPhotos: PropTypes.func.isRequired,
};
