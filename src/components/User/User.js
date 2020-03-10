import React from 'react';
import PropTypes from 'prop-types';

export function User({ name }) {
	return (
		<div className="user ib">
			<p>Hello, {name}!</p>
		</div>
	);
}

User.propTypes = {
	name: PropTypes.string.isRequired,
};
