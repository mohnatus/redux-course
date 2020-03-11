import React from 'react';
import PropTypes from 'prop-types';
import Gallery from './Gallery';
import Button from './Button';
import { getLastYears } from '../util/date';
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

		if (!photos.length) {
			return <p>Изображения за {year} год не найдены</p>;
		}

		return (
			<div className="photos">
				<Gallery photos={photos} />
			</div>
		);
	};

	const years = getLastYears(5);

	return (
		<div className="page py-4">
			<div className="filters btn-group mb-4">
				{years.map(btnYear => {
					return (
						<Button
							key={btnYear}
							onClick={yearClickHandler}
							disabled={!name}
							active={year === btnYear}
						>
							{btnYear}
						</Button>
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
