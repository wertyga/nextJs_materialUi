import React from 'react';
import { Container } from '@material-ui/core';
import SideMenu from 'components/SideMenu/SideMenu';

import useStyles from './styles';

const AppContent = ({ Component, pageProps }) => {
	// const styles = useStyles();
	return (
		<div>
			<SideMenu />
			<Component {...pageProps} />
		</div>
	);
};

export default AppContent;
