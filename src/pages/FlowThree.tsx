// import React from 'react'

import { Pagination, Stack } from '@mui/material';
import React, { Suspense, useState } from 'react';
import { useGetAllPostsFromFlow1Query } from '../api/api';
import FlowTwoCard from '../components/FlowTwoCard/FlowTwoCard';
import { FallBack } from './FlowOne';

const FlowThree = () => {
	const [page, setPage] = useState(1);
	const { data, error, isLoading } = useGetAllPostsFromFlow1Query('');
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		console.log(event);
		console.log(error);
		console.log(isLoading);
		setPage(value);
	};
	if (error) {
		console.log(error);
		return <div>{error}</div>;
	} else if (isLoading) {
		console.log(isLoading);
		return <div>{isLoading}</div>;
	} else
		return (
			<Suspense fallback={<FallBack />}>
				<FlowTwoCard details={data[page - 1]} grid1={6} grid2={6} />
				<Stack spacing={2} sx={{ padding: '16px', float: 'right' }}>
					<Pagination
						count={data.length}
						defaultPage={1}
						boundaryCount={2}
						shape='rounded'
						page={page}
						onChange={handleChange}
					/>
				</Stack>
			</Suspense>
		);
};

export default FlowThree;
