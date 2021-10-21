import { createTheme } from '@mui/material';
import { blue } from '@mui/material/colors';
// import { blue, grey } from '@mui/material/colors';
// interface PaletteColor {
// 	light?: string;
// 	main: string;
// 	dark?: string;
// 	contrastText?: string;
// }
export const theme = createTheme({
	palette: {
		background: { default: '#E5E5E5' },
		text: {
			primary: '#585858',
			secondary: blue[500],
		},
	},
	typography: {
		fontFamily: 'Poppins',
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 600,
	},
});
