import { makeYearPhotos } from './makeYearPhotos';

let photosArr = [];
let cached = false;

const limit = 200;

function loadPhotos(offset = 0, onSuccess, onError) {
	let count = limit;

	//eslint-disable-next-line no-undef
	VK.Api.call('photos.getAll', { extended: 1, count, offset, v: '5.80' }, r => {
		const response = r.response;
		try {
			photosArr = [...photosArr, ...response.items];
			if (offset <= response.count) {
				offset += limit;
				loadPhotos(offset, onSuccess, onError);
			} else {
				onSuccess();
			}
		} catch (e) {
			onError(new Error(e));
		}
	});
}

export function getPhotos(year, onSuccess, onError) {
	if (cached) {
		const photos = makeYearPhotos(photosArr, year);
		onSuccess(photos);
		return;
	}

	loadPhotos(
		0,
		() => {
			let photos = makeYearPhotos(photosArr, year);
			cached = true;
			onSuccess(photos);
		},
		error => {
			onError(error);
		}
	);
}
