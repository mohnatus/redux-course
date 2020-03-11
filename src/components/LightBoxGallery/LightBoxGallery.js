import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './LightBoxGallery.scss';

LightBoxGallery.propTypes = {
	gallery: PropTypes.array.isRequired,
	startId: PropTypes.number.isRequired,
	onClose: PropTypes.func.isRequired,
};

function LightBoxGallery({ gallery, startId, onClose }) {
	let startIndex = gallery.findIndex(photo => photo.id === startId);

	const [current, setCurrent] = useState(startIndex === -1 ? 0 : startIndex);

	function prev() {
		let index = current - 1;
		if (index < 0) index = gallery.length - 1;
		setCurrent(index);
	}

	function next() {
		let index = current + 1;
		if (index >= gallery.length) index = 0;
		setCurrent(index);
	}

	return (
		<>
			{current === -1 ? null : (
				<div className="lightbox">
					<div className="lightbox__close" onClick={onClose}>
						&times;
					</div>

					<div className="lightbox__prev" onClick={prev}>
						&lt;
					</div>
					<div className="lightbox__next" onClick={next}>
						&gt;
					</div>

					<div className="lightbox__img">
						<div className="lightbox__mask" onClick={onClose}></div>
						<img src={gallery[current].full} alt="" />
					</div>
				</div>
			)}
		</>
	);
}

export default LightBoxGallery;
