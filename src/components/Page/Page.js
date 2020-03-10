import React from 'react';
import PropTypes from 'prop-types';
import { getLastYears } from '../../util/date';

export function Page({ name, year, photos, getPhotos, isFetching, error }) {
	const yearClickHandler = e => {
		if (!name) return;
		const year = +e.currentTarget.innerText;
		getPhotos(year);
	};

	const getTemplate = () => {
		if (!name) {
			return <p>Авторизуйтесь, чтобы смотреть фотографии</p>;
		}

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

	const years = getLastYears(5);

	return (
		<div className="ib page">
			<div className="filters">
				{years.map(btnYear => {
					const classes = ['btn'];
					if (year === btnYear) classes.push('active');
					return (
						<button
							key={btnYear}
							onClick={yearClickHandler}
							className={classes.join(' ')}
							disabled={!name}
						>
							{btnYear}
						</button>
					);
				})}
			</div>
			{name ? (
				<h3>
					{year} [{photos.length}]
				</h3>
			) : null}

			{getTemplate()}
		</div>
	);
}

Page.propTypes = {
	year: PropTypes.number.isRequired,
	photos: PropTypes.array.isRequired,
	getPhotos: PropTypes.func.isRequired,
};
