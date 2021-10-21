import { createSlice } from '@reduxjs/toolkit';
import { format } from 'date-fns';
import { flow1Api } from '../../api/api';
interface factualdiscrepancies {
	id: number;
	by: string;
	description: string;
}
interface timelineList {
	id: number;
	date: string;
	description: string;
}
interface timelineInterface {
	highest: timelineList[];
	high: timelineList[];
	mid: timelineList[];
	low: timelineList[];
}
export interface datainteface {
	id: number;
	title: string;
	date: string;
	description: string;
	sources: string[];
	img: string;
	factualdiscrepancies: factualdiscrepancies[];
	timeline: timelineInterface;
}

interface initialStateinterface {
	radioInput: string;
	data: datainteface[];
	timeline: timelineList[];
	params: number;
	view: number;
	factualdiscrepancies: factualdiscrepancies[];
	date: string;
	title: string;
}
const initialState: initialStateinterface = {
	radioInput: 'highest',
	data: [],
	timeline: [],
	params: 1,
	view: 1,
	factualdiscrepancies: [],
	date: '',
	title: '',
};

export const radioElementSlice: any = createSlice({
	name: 'radioElementController',
	initialState,
	reducers: {
		handleChange: (state, action) => {
			state.radioInput = action.payload;
			state.view = 1;
		},
		getHighData: (state, action) => {
			state.timeline = state.data[action.payload].timeline.high;
		},
		getMidData: (state, action) => {
			state.timeline = state.data[action.payload].timeline.mid;
		},
		getLowData: (state, action) => {
			state.timeline = state.data[action.payload].timeline.low;
		},
		getHighestData: (state, action) => {
			state.timeline = state.data[action.payload].timeline.highest;
		},
		updateparams: (state, action) => {
			state.params = action.payload;
		},
		updateView: (state, action) => {
			state.view = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			flow1Api.endpoints.getAllPostsFromFlow1.matchFulfilled,
			(state, { payload }) => {
				state.data = payload;
				state.timeline =
					payload[state.params - 1].timeline[state.radioInput];
				state.factualdiscrepancies =
					payload[state.params - 1].factualdiscrepancies;
				state.title = payload[state.params - 1].title;
				state.date = format(new Date(payload[state.params - 1].date), 'PP');
			}
		);
	},
});
export const {
	handleChange,
	getHighData,
	getMidData,
	getLowData,
	getHighestData,
	updateparams,
	updateView,
} = radioElementSlice.actions;
export default radioElementSlice.reducer;
