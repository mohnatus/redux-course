import React from 'react';
import { connect } from 'react-redux';
import './App.css';

function App({ user, page }) {
	console.log(user);
	const { name, lastname } = user;
	const { photos, year } = page;

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-title">Top photos</h1>
			</header>
			<p>
				Hello, {name} {lastname}!
			</p>
			<p>
				You have {photos.length} photos in {year} year
			</p>
		</div>
	);
}

const mapStateToProps = ({ user, page }) => {
	return {
		user,
		page,
	};
};

export default connect(mapStateToProps)(App);
