import React, { Suspense } from 'react';
import { useGetAllPostsFromFlow1Query } from '../api/api';
import CollapsibleCard from '../components/Mui/collapsibleCard';
export interface flow1 {
	id: number;
	title: string;
	date: string;
	sources: string[];
	img: string;
	discription: string;
}
export type typeFlow1 = {
	details: {
		id: number;
		title: string;
		date: string;
		sources: string[];
		img: string;
		discription: string;
	};
};
export const FallBack = () => (
	<div>
		<h1>Loading</h1>
	</div>
);
const FlowOne: React.FC = () => {
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
						return <CollapsibleCard key={index} details={item} />;
					})}
				</>
			</Suspense>
		);
};

export default FlowOne;
