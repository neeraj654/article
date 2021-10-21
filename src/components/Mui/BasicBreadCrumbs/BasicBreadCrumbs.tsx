import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Link, { LinkProps } from '@mui/material/Link';
function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
	event.preventDefault();
}

interface LinkRouterProps extends LinkProps {
	to: string;
	replace?: boolean;
}
const LinkRouter = (props: LinkRouterProps) => (
	<Link {...props} component={RouterLink} />
);
const BreadcrumbItems = [
	{ link: '/', label: 'Flow 1' },
	{ link: '/flowTwo', label: 'Flow 2' },
	{ link: '/flowThree', label: 'Flow 3' },
	{ link: '/flowFour', label: 'Flow 4' },
	{ link: '/flowFive', label: 'Flow 5' },
	{ link: '/flowSix', label: 'Flow 6' },
];
const BasicBreadCrumbs: React.FC = () => {
	const history = useLocation();
	return (
		<div role='presentation' onClick={handleClick}>
			<Breadcrumbs aria-label='breadcrumb'>
				{BreadcrumbItems.map((item, index) => {
					return (
						<LinkRouter
							key={index}
							underline='hover'
							color={
								history.pathname === item.link ? 'primary' : 'inherit'
							}
							to={item.link}
						>
							{item.label}
						</LinkRouter>
					);
				})}
			</Breadcrumbs>
		</div>
	);
};
export default BasicBreadCrumbs;
