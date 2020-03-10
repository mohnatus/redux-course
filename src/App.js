import React from 'react';
import { connect } from 'react-redux';
import './App.css';

function App({ user }) {
	console.log(user);
	const { name, lastname, age } = user;
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-title">Top photos</h1>
			</header>
			<p>
				Hello, {name} {lastname}!
			</p>
			<p>Are you {age} old?</p>
		</div>
	);
}

const mapStateToProps = store => {
	return {
		user: store.user,
	};
};

export default connect(mapStateToProps)(App);
