import { Timeline } from '@mui/lab';
import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import MuiTimelineItem from './TimelineItem';
export interface factualdiscrepanciesInterface {
	id: number;
	by: string;
	discription: string;
}
export interface timelineListInterface {
	id: number;
	date: string;
	discription: string;
}
export interface timelineInterface {
	highest: timelineInterface[];
	high: timelineInterface[];
	mid: timelineInterface[];
	low: timelineInterface[];
}
export interface dataProps {
	id: number;
	factualdiscrepancies: factualdiscrepanciesInterface[];
	timeline: timelineInterface;
}
const MuiTimeline = () => {
	const data = useAppSelector((state) => {
		const radiostates: any = state.radioElementController;
		return radiostates.timeline;
	});
	return (
		<React.Fragment>
			<Timeline position='right'>
				{data.map((item: any, index: number) => {
					return <MuiTimelineItem data={item} key={index} />;
				})}
			</Timeline>
		</React.Fragment>
	);
};

export default MuiTimeline;
