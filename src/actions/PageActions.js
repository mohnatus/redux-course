/**
 * Действия страницы
 */

import { getPhotos } from './utils/getPhotos';

export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL';

/**
 * Отображение фотографий по году
 * @param {number} year
 */
export function getPhotosByYear(year) {
	return dispatch => {
		dispatch({
			type: GET_PHOTOS_REQUEST,
			payload: year,
		});

		getPhotos(
			year,
			photos => {
				dispatch({
					type: GET_PHOTOS_SUCCESS,
					payload: photos,
				});
			},
			error => {
				dispatch({
					type: GET_PHOTOS_FAIL,
					error: true,
					payload: error,
				});
			}
		);
	};
}
