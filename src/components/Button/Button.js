import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

Button.propTypes = {
	active: PropTypes.bool,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};

function Button({ children, active, disabled, onClick }) {
	const classes = ['btn'];
	if (active) classes.push('active');

	return (
		<button className={classes.join(' ')} disabled={disabled} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
