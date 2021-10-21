const RadioElementData = [
	{
		value: 'highest',
		label: 'Highest',
	},
	{
		value: 'high',
		label: 'High',
	},
	{
		value: 'mid',
		label: 'Mid',
	},
	{
		value: 'low',
		label: 'Low',
	},
];
export const getRadioElemet = (isHighest = false) => {
	const views = RadioElementData.filter((item) => {
		return isHighest ? item.value : item.value !== 'highest';
	});
	return views;
};
