import React from 'react';
import { connect } from 'react-redux';
import { User } from '../../components/User/User';
import { Page } from '../../components/Page/Page';

import { getPhotos } from '../../actions/PageActions';
import { handleLogin } from '../../actions/UserActions';

function App({ user, page, getPhotosAction, handleLoginAction }) {
	return (
		<div className="app">
			<Page {...page} getPhotos={getPhotosAction} />
			<User {...user} handleLogin={handleLoginAction} />
		</div>
	);
}

const mapStateToProps = store => {
	return {
		user: store.user,
		page: store.page,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getPhotosAction: year => dispatch(getPhotos(year)),
		handleLoginAction: () => dispatch(handleLogin()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
