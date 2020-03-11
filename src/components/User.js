import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export function User({ name, error, isFetching, handleLogin }) {
	const getTemplate = () => {
		if (error) {
			return <p>Во время запроса произошла ошибка, обновите страницу</p>;
		}

		if (isFetching) {
			return <p>Загружаю...</p>;
		}

		if (name) {
			return <p>Привет, {name}!</p>;
		} else {
			return (
				<Button onClick={handleLogin} active>
					Войти
				</Button>
			);
		}
	};

	return <div className="user py-4">{getTemplate()}</div>;
}

User.propTypes = {
	name: PropTypes.string.isRequired,
	error: PropTypes.string,
	isFetching: PropTypes.bool.isRequired,
	handleLogin: PropTypes.func.isRequired,
};
