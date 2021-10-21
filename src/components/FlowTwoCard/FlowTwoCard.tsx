import {
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from '@mui/material';
import { format } from 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';
import { typeFlow2 } from '../../pages/FlowTwo';
import getImage from '../../services/getImage/getImage';

const FlowTwoCard: React.FC<typeFlow2> = ({
	details,
	grid1 = 6,
	grid2 = 6,
}) => {
	const { title, date, sources } = details;
	const eventDate = new Date(date);
	return (
		<React.Fragment>
			<Container sx={{ paddingTop: '16px' }}>
				<Card sx={{ borderRadius: '10px', padding: '16px' }}>
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							{title}
						</Typography>
						<Typography
							paragraph
							fontSize='12px'
							fontWeight={600}
							gutterBottom
						>
							{format(eventDate, 'MMM, dd, yyyy, cccc')}
						</Typography>
					</CardContent>
					<Grid container spacing={2}>
						<Grid item md={grid1}>
							<CardMedia
								component='img'
								image={details.img}
								alt='green iguana'
								sx={{
									objectFit: 'fill',
									borderRadius: '10px',
								}}
							/>
							<Typography
								gutterBottom
								variant='h6'
								color='primary'
								component='div'
								sx={{
									paddingTop: '16px',
									textAlign: 'center',
								}}
							>
								Covered by
							</Typography>
							<Box display='inline-flex'>
								{sources.map((item: string, index: number) => {
									const img = getImage(item);
									return (
										<CardMedia
											key={index}
											component='img'
											image={img}
											alt='green iguana'
											sx={{
												marginX: '6px',
												maxHeight: '30px',
												objectFit: 'scale-down',
											}}
										/>
									);
								})}
							</Box>
						</Grid>
						<Grid item md={grid2}>
							<Typography
								paragraph
								gutterBottom
								sx={{
									fontSize: '10px',
								}}
							>
								{details.discription}
							</Typography>
						</Grid>
					</Grid>
					<Link to={`/detail/${details.id}`}>
						<Button
							sx={{
								float: 'right',
								borderRadius: '50px',
								padding: '2px 16px',
								textTransform: 'none',
							}}
							variant='contained'
						>
							Read full story
						</Button>
					</Link>
				</Card>
			</Container>
		</React.Fragment>
	);
};
export default FlowTwoCard;
