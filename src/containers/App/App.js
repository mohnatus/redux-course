import React from 'react';
import { connect } from 'react-redux';
import { User } from '../../components/User/User';
import { Page } from '../../components/Page/Page';

import { getPhotos } from '../../actions/PageActions';

function App({ user, page, getPhotosAction }) {
	return (
		<div className="app">
			<Page {...page} getPhotos={getPhotosAction} />
			<User name={user.name} />
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
