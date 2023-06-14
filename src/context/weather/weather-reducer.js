const handlers = {
	["FETCH_WEATHER_REQUEST"]: (state, action) => {
		console.log("fetch");
		return { ...state, loading: true };
	},
	["FETCH_WEATHER_SUCCESS"]: (state, action) => ({
		...state,
		weather: action.payload,
		loading: false,
	}),
	["FETCH_WEATHER_FAILURE"]: (state, action) => ({
		...state,
		loading: false,
		error: action.payload,
	}),

	DEFAULT: (state) => state,
};

const weatherReducer = (state, action) => {
	const handler = handlers[action.type] || handlers.DEFAULT;
	return handler(state, action);
};
export default weatherReducer;
