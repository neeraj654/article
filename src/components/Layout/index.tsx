import React from 'react';
import NavBar from '../Mui/Navbar/index';
import { Container } from '@mui/material';

const index: React.FC<any> = (props) => {
	return (
		<React.Fragment>
			<Container>
				<NavBar />
				{props.children}
			</Container>
		</React.Fragment>
	);
};

export default index;
