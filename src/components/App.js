import React from 'react';
import UserContainer from '../containers/UserContainer';
import PageContainer from '../containers/PageContainer';

export default function App() {
	return (
		<div className="app">
			<UserContainer />
			<PageContainer />
		</div>
	);
}
