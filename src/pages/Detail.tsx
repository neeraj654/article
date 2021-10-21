import React from 'react';
import {
	Box,
	Card,
	FormControl,
	FormControlLabel,
	Grid,
	Radio,
	RadioGroup,
	Typography,
} from '@mui/material';
import { getRadioElemet } from '../services/getRadioElemet/getRadioElemet';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
	handleChange,
	getHighData,
	getHighestData,
	getLowData,
	getMidData,
	updateparams,
} from '../features/radioElementController/radioElementController';
import MuiTimeline from '../components/Mui/Timeline/MuiTimeline';
import { useParams } from 'react-router';
import { useGetAllPostsFromFlow1Query } from '../api/api';
import Factualdiscrepancies from '../components/Mui/Factualdiscrepancies/Factualdiscrepancies';
const Detail = () => {
	useGetAllPostsFromFlow1Query('');
	const dispatch = useAppDispatch();
	const radioInput = useAppSelector(
		(state: any) => state.radioElementController.radioInput
	);
	const params: {
		id: string;
	} = useParams();
	const changeTimeline = (event: React.ChangeEvent<any>) => {
		const inputValue: string = event.target.value;
		if (inputValue === 'highest') {
			dispatch(getHighestData(+params.id - 1));
		}
		if (inputValue === 'high') {
			dispatch(getHighData(+params.id - 1));
		}
		if (inputValue === 'mid') {
			dispatch(getMidData(+params.id - 1));
		}
		if (inputValue === 'low') {
			dispatch(getLowData(+params.id - 1));
		}
		dispatch(handleChange(event.target.value));
	};
	React.useEffect(() => {
		dispatch(updateparams(params.id));
	}, [params]);

	const date = useAppSelector((state) => {
		const radioElementController: any = state.radioElementController;
		return radioElementController.date;
	});
	const title = useAppSelector((state) => {
		const radioElementController: any = state.radioElementController;
		return radioElementController.title;
	});
	return (
		<Box marginTop='24px'>
			<Grid container>
				<Grid item md={8} xl={8} sm={8} xs={8}>
					<Typography variant='h4' gutterBottom component='div'>
						{title}
					</Typography>
					<Typography variant='body2' gutterBottom component='div'>
						{date}
					</Typography>
				</Grid>
				<Grid item md={4} xl={4} sm={4} xs={4}>
					<Box
						display='flex'
						justifyContent='flex-end'
						alignItems='center'
						width='100%'
					>
						<FormControl component='fieldset'>
							<RadioGroup
								row
								aria-label='view'
								name='row-radio-buttons-group'
								value={radioInput}
								onChange={(event) => changeTimeline(event)}
							>
								{getRadioElemet(true).map((item, index) => {
									return (
										<FormControlLabel
											key={index}
											value={item.value}
											control={<Radio />}
											label={item.label}
										/>
									);
								})}
							</RadioGroup>
						</FormControl>
					</Box>
				</Grid>
			</Grid>
			<Grid container spacing={1}>
				<Grid item md={5}>
					<Card
						sx={{
							borderRadius: '10px',
							padding: '16px',
						}}
					>
						<Typography gutterBottom variant='h6' component='div'>
							Timeline
						</Typography>
						<Box height='calc(100vh - 245px)' overflow='scroll'>
							<MuiTimeline />
						</Box>
					</Card>
				</Grid>
				<Grid item md={7}>
					<Card sx={{ borderRadius: '10px', padding: '16px' }}>
						<Typography gutterBottom variant='h6' component='div'>
							Factual discrepencies
						</Typography>
						<Box height='calc(100vh - 245px)' sx={{ overflow: 'scroll' }}>
							<Factualdiscrepancies />
						</Box>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Detail;
