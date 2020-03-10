import React from 'react';
import UserContainer from '../../containers/UserContainer/UserContainer';
import PageContainer from '../../containers/PageContainer/PageContainer';

export default function App() {
	return (
		<div className="app">
			<PageContainer />
			<UserContainer />
		</div>
	);
}
