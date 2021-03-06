import React from 'react';
import { connect } from 'react-redux';
import { Page } from '../components/Page';
import { getPhotosByYear } from '../actions/PageActions';

function PageContainer({ name, page, getPhotos }) {
	return <Page {...page} name={name} getPhotos={getPhotos} />;
}

const mapStateToProps = store => {
	return {
		page: store.page,
		name: store.user.name,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getPhotos: year => dispatch(getPhotosByYear(year)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
