import React from 'react';
import { connect } from 'react-redux';
import { User } from '../../components/User/User';
import { Page } from '../../components/Page/Page';

import { setYear } from '../../actions/PageActions';

import './App.css';

function App({ user, page, setYearAction }) {
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-title">Мой топ фото</h1>
			</header>
			<User name={user.name} />
			<Page photos={page.photos} year={page.year} setYear={setYearAction} />
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
		setYearAction: year => dispatch(setYear(year)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
