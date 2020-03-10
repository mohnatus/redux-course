import React from 'react';
import PropTypes from 'prop-types';

export function Page({ year, photos }) {
	return (
		<div>
			<p>
				You have {photos.length} photos in {year} year
			</p>
		</div>
	);
}

Page.propTypes = {
	year: PropTypes.number.isRequired,
	photos: PropTypes.array.isRequired,
};
