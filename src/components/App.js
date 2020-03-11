import React from 'react';
import UserContainer from '../containers/UserContainer';
import PageContainer from '../containers/PageContainer';

export default function App() {
	return (
		<div className="app">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-2 order-md-last col-lg-2 text-right">
						<UserContainer />
					</div>
					<div className="col-12 col-md-10 order-md-first col-lg-10">
						<PageContainer />
					</div>
				</div>
			</div>
		</div>
	);
}
