import React from 'react';
import { connect } from 'react-redux';
import { User } from '../../components/User/User';
import { Page } from '../../components/Page/Page';

import './App.css';

function App({ user, page }) {
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-title">Мой топ фото</h1>
			</header>
			<User name={user.name} />
			<Page photos={page.photos} year={page.year} />
		</div>
	);
}

const mapStateToProps = store => {
	return {
		user: store.user,
		page: store.page,
	};
};

export default connect(mapStateToProps)(App);
