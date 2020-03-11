import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
	active: PropTypes.bool,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};

function Button({ children, active, disabled, onClick }) {
	const classes = ['btn'];
	classes.push(active ? 'btn-primary' : 'btn-secondary');

	return (
		<button className={classes.join(' ')} disabled={disabled} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
