import { Suspense } from 'react';
import { FallBack, flow1 } from './FlowOne';
import FlowTwoCard from '../components/FlowTwoCard/FlowTwoCard';
import { useGetAllPostsFromFlow1Query } from '../api/api';
import { GridSize } from '@mui/material';
export type typeFlow2 = {
	details: {
		id: number;
		title: string;
		date: string;
		sources: string[];
		img: string;
		discription: string;
	};
	grid1: undefined | GridSize;
	grid2: undefined | GridSize;
};
const FlowTwo = () => {
	const { data, error, isLoading } = useGetAllPostsFromFlow1Query('');
	if (error) {
		console.log(error);
		return <div>{error}</div>;
	} else if (isLoading) {
		console.log(isLoading);
		return <div>{isLoading}</div>;
	} else
		return (
			<Suspense fallback={<FallBack />}>
				<>
					{data?.map((item: flow1, index: number) => {
						return (
							<FlowTwoCard
								key={index}
								details={item}
								grid1={6}
								grid2={6}
							/>
						);
					})}
				</>
			</Suspense>
		);
};
export default FlowTwo;
