import React from 'react';
import {
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineOppositeContent,
	TimelineSeparator,
} from '@mui/lab';
import { Box, Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { format } from 'date-fns';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { updateView } from '../../../features/radioElementController/radioElementController';

interface Props {
	data: any;
}
const MuiTimelineItem = (props: Props) => {
	const { data } = props;
	const { id, description, date } = data;
	const view = useAppSelector((state) => {
		const radioState: any = state.radioElementController;
		return radioState.view;
	});
	const dispatch = useAppDispatch();
	return (
		<React.Fragment>
			<TimelineItem>
				<TimelineOppositeContent
					color='text.secondary'
					onClick={() => dispatch(updateView(id))}
					sx={{
						cursor: 'pointer',
						flex: 'unset',
					}}
				>
					{format(new Date(date), 'PP')}
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot
						variant='outlined'
						sx={{
							border: '2px solid #DA70D6',
							boxShadow: 'none',
						}}
					>
						<FiberManualRecordIcon
							sx={{ fontSize: '5px', color: '#DA70D6' }}
						/>
					</TimelineDot>
					<TimelineConnector
						sx={{
							width: '0px',
							borderRight: '2px dotted #DA70D6',
							backgroundColor: 'transparent',
						}}
					/>
				</TimelineSeparator>
				<TimelineContent>
					{view === id && (
						<Box
							sx={{
								backgroundColor: '#EDECFF',
								marginTop: '16px',
								borderRadius: '10px',
								padding: '10px',
							}}
						>
							<Typography
								variant='subtitle2'
								component='div'
								fontSize='10px'
							>
								{description}
							</Typography>
						</Box>
					)}
				</TimelineContent>
			</TimelineItem>
		</React.Fragment>
	);
};

export default MuiTimelineItem;
