import { makeYearPhotos } from './makeYearPhotos';

let photosArr = [];
let cached = false;

/**
 * Загружает фотографии из VK порциями по 200
 * @param {number} offset
 * @param {Function} onSuccess
 * @param {Function} onError
 */
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

/**
 * Возвращает фотографии за определенный год
 * @param {number} year
 * @param {Function} onSuccess
 * @param {Function} onError
 */
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
