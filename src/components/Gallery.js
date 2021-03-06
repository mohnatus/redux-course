import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import LightBoxGallery from './LightBoxGallery/LightBoxGallery';

Gallery.propTypes = {
	photos: PropTypes.array.isRequired,
};

const getImageByFormat = sizes => (...formats) => {
	for (let k = 0, formatsCount = formats.length; k < formatsCount; k++) {
		for (let i = 0, sizesLength = sizes.length; i < sizesLength; i++) {
			if (sizes[i].type === formats[k]) return sizes[i].url;
		}
	}
	return null;
};

function Gallery({ photos }) {
	const [increasedId, setIncreasedId] = useState(null);
	console.log(photos);

	const gallery = photos.map(photo => {
		const getUrl = getImageByFormat(photo.sizes);
		return {
			preview: getUrl('p'),
			full: getUrl('w', 'z', 'y', 'r'),
			likes: photo.likes.count,
			id: photo.id,
		};
	});

	function increase(id) {
		setIncreasedId(id);
	}

	function closeLightBox() {
		setIncreasedId(null);
	}

	return (
		<>
			<div className="gallery">
				<div className="row">
					{gallery.map(entry => {
						return (
							<div class="col-12 col-md-6 col-lg-4" key={entry.id}>
								<Photo {...entry} onClick={increase} />
							</div>
						);
					})}
				</div>
			</div>

			{increasedId ? (
				<LightBoxGallery
					gallery={gallery}
					startId={increasedId}
					onClose={closeLightBox}
				/>
			) : null}
		</>
	);
}

export default Gallery;
