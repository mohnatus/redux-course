/**
 * Действия юзера
 */

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

/**
 * Авторизация через VK
 * @param {Function} cb
 */
export function handleLogin(cb) {
	return dispatch => {
		dispatch({
			type: LOGIN_REQUEST,
		});

		//eslint-disable-next-line no-undef
		VK.Auth.login(r => {
			if (r.session) {
				let username = r.session.user.first_name;

				dispatch({
					type: LOGIN_SUCCESS,
					payload: username,
				});

				if (cb && typeof cb === 'function') cb();
			} else {
				dispatch({
					type: LOGIN_FAIL,
					error: true,
					payload: new Error('Ошибка авторизации'),
				});
			}
		}, 4);
	};
}
