import React from 'react';
import { connect } from 'react-redux';
import { User } from '../components/User';
import { handleLogin } from '../actions/UserActions';
import { getPhotosByYear } from '../actions/PageActions';
import { getCurrentYear } from '../util/date';

function UserContainer(props) {
	const handleLogin = () => {
		const cb = () => {
			const year = getCurrentYear();
			props.getPhotos(year);
		};
		props.handleLogin(cb);
	};

	return <User {...props.user} handleLogin={handleLogin} />;
}

const mapStateToProps = store => {
	return {
		user: store.user,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleLogin: cb => dispatch(handleLogin(cb)),
		getPhotos: year => dispatch(getPhotosByYear(year)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
