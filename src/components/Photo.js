import React from 'react';
import PropTypes from 'prop-types';

Photo.propTypes = {
	id: PropTypes.number.isRequired,
	preview: PropTypes.string.isRequired,
	likes: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired,
};

function Photo({ id, preview, likes, onClick }) {
	const clickHandler = function() {
		onClick(id);
	};

	return (
		<div className="photo" onClick={clickHandler}>
			<p>
				<img src={preview} alt="" />
			</p>
			<p>{likes} ❤</p>
		</div>
	);
}

export default Photo;
