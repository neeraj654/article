import React from 'react';
import {
	AppBar,
	Avatar,
	Box,
	Button,
	CssBaseline,
	Toolbar,
	Typography,
	useScrollTrigger,
} from '@mui/material';
import logo from '../../../assets/logo.png';
import { styled } from '@mui/material/styles';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BasicBreadcrumbs from '../BasicBreadCrumbs/BasicBreadCrumbs';
interface Props {
	window?: () => Window;
	children: React.ReactElement;
}

function ElevationScroll(props: Props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}
const SignOutBtn = styled('div')({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	width: '100%',
});
const SignOutIcon = styled('div')({
	borderRadius: '50%',
	display: 'flex',
	backgroundColor: 'rgba(255,255,255,0.2)',
	alignItems: 'center',
	justifyContent: 'center',
	padding: '4px',
});
const MySignOutIcon = () => (
	<SignOutIcon>
		<HowToRegIcon sx={{ fontSize: '18px' }} />
	</SignOutIcon>
);
const index: React.FC = () => {
	return (
		<>
			<CssBaseline />
			<ElevationScroll>
				<AppBar color='default'>
					<Toolbar>
						<SignOutBtn>
							<Box display='flex'>
								<Avatar
									sx={{ marginRight: '20px' }}
									src={logo}
									alt='logo'
								/>
								<Typography variant='h6' component='div'>
									Logo
								</Typography>
							</Box>
							<BasicBreadcrumbs />

							<Button
								color='primary'
								startIcon={<MySignOutIcon />}
								variant='contained'
								endIcon={<KeyboardArrowDownIcon />}
							>
								Sign out
							</Button>
						</SignOutBtn>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Toolbar />
		</>
	);
};

export default index;
