// import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

// export const store = configureStore({
// 	reducer: {
// 		counter: counterReducer,
// 	},
// });

// export type AppThunk<ReturnType = void> = ThunkAction<
// 	ReturnType,
// 	RootState,
// 	unknown,
// 	Action<string>
// >;
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { flow1Api } from '../api/api';
import radioElementController from '../features/radioElementController/radioElementController';
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
	reducer: {
		[flow1Api.reducerPath]: flow1Api.reducer,
		radioElementController: radioElementController,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(flow1Api.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
