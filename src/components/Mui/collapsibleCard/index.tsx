import * as React from 'react';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
	Box,
	Button,
	CardMedia,
	Container,
	Grid,
	Collapse,
	CardActions,
	CardContent,
	Card,
	Typography,
	styled,
} from '@mui/material';
import { format } from 'date-fns';
import getImage from '../../../services/getImage/getImage';
import { typeFlow1 } from '../../../pages/FlowOne';
import { Link } from 'react-router-dom';

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean;
}

const CollapsibleCard: React.FC<typeFlow1> = ({ details }) => {
	const { date, discription, img, sources, title, id } = details;
	const [expanded, setExpanded] = React.useState<boolean>(false);
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	const eventDate: Date = new Date(date);
	const ExpandMore = styled((props: ExpandMoreProps) => {
		const { expand, ...other } = props;
		return (
			<Button
				sx={{ textTransform: 'none', position: 'relative', bottom: '10px' }}
				variant='text'
				onClick={handleExpandClick}
				endIcon={
					<IconButton
						sx={{
							width: '0px',
							height: '0px',
						}}
						color='primary'
						{...other}
					/>
				}
			>
				Show more
			</Button>
		);
	})(({ expand, theme }) => ({
		transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
		duration: theme.transitions.duration.shortest,
	}));

	return (
		<Container sx={{ paddingTop: '16px' }}>
			<Card sx={{ borderRadius: '10px' }}>
				<Grid spacing={10} container>
					<Grid item sm={4} md={4}>
						<CardMedia
							component='img'
							height='180'
							image={img}
							alt='green iguana'
							sx={{
								position: 'relative',
								borderRadius: '10px',
								minHeight: '180px',
								minWidth: '380px',
								top: '8px',
								left: '8px',
							}}
						/>
					</Grid>
					<Grid item sm={8} md={8}>
						<CardContent>
							<Typography variant='h6' fontWeight={600} component='div'>
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
							<Grid container spacing={2}>
								<Grid item>
									<Typography
										gutterBottom
										variant='body1'
										component='div'
										color='primary'
									>
										Covered By :
									</Typography>
								</Grid>
								<Grid item>
									<Box display='flex'>
										{sources.map((item: string, index: number) => {
											const img = getImage(item);
											return (
												<CardMedia
													key={index}
													component='img'
													image={img}
													alt='green iguana'
													sx={{
														marginX: '2px',
														maxWidth: 'auto',
														maxHeight: '30px',
														objectFit: 'scale-down',
													}}
												/>
											);
										})}
									</Box>
								</Grid>
							</Grid>
						</CardContent>
					</Grid>
				</Grid>

				<Collapse in={expanded} timeout='auto' unmountOnExit>
					<CardContent>
						<Typography marginTop='16px' paragraph fontSize='12px'>
							{discription.toString()}
						</Typography>
					</CardContent>
				</Collapse>

				<Box display='flex' width='100%' justifyContent='flex-end'>
					<CardActions
						disableSpacing
						sx={{
							justifyContent: 'space-between',
							maxHeight: '0px',
							width: '46.57vw',
						}}
					>
						<Link to={`/detail/${id}`}>
							<Button
								variant='text'
								sx={{
									textTransform: 'none',
									position: 'relative',
									bottom: '10px',
									width: '116.033px',
								}}
							>
								Read full story
							</Button>
						</Link>
						<ExpandMore
							expand={expanded}
							onClick={handleExpandClick}
							aria-expanded={expanded}
							aria-label='show more'
						>
							<ExpandMoreIcon />
						</ExpandMore>
					</CardActions>
				</Box>
			</Card>
		</Container>
	);
};
export default CollapsibleCard;
