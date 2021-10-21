import { Box, Button, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import getImage from '../../../services/getImage/getImage';
import { factualdiscrepanciesInterface } from '../Timeline/MuiTimeline';

const Factualdiscrepancies = () => {
	const factualdiscrepancies = useAppSelector((state) => {
		const radioElementController: any = state.radioElementController;
		return radioElementController.factualdiscrepancies;
	});
	return (
		<React.Fragment>
			{factualdiscrepancies.map(
				(item: factualdiscrepanciesInterface, index: number) => {
					return (
						<Box
							key={index}
							sx={{
								backgroundColor: '#EDECFF',
								marginTop: '16px',
							}}
						>
							<Grid container>
								<Grid item md={2}>
									<Box
										sx={{
											backgroundColor: '#DAD7FF',
											borderRadius: '10px',
											padding: '6px',
											width: '100%',
											height: '100%',
											display: 'grid',
											alignContent: 'center',
											justifyItems: 'center',
										}}
									>
										<CardMedia
											component='img'
											image={getImage(item.by)}
											alt='logo'
										/>
									</Box>
								</Grid>
								<Grid item md={10}>
									<Box padding='10px'>
										<Typography fontSize='12px' paragraph>
											{item.discription}
										</Typography>
										<Button
											variant='outlined'
											sx={{
												borderRadius: '50px',
												paddingX: '16px',
												paddingY: '2px',
												fontSize: '10px',
												textTransform: 'none',
												background: '#D2D0E2',
												float: 'right',
												position: 'relative',
												bottom: '8px',
											}}
										>
											View source
										</Button>
									</Box>
								</Grid>
							</Grid>
						</Box>
					);
				}
			)}
		</React.Fragment>
	);
};

export default Factualdiscrepancies;
