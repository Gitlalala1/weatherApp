import React, {
	useReducer,
	useContext,
	useEffect,
	useState,
	useCallback,
} from "react";
import weatherReducer from "./weather-reducer";
import WeatherContext from "./weather-context";
import * as Location from "expo-location";
const WeatherState = ({ children }) => {
	const initialState = {
		loading: true,
		error: null,
		weather: [],
	};
	const [state, dispatch] = useReducer(weatherReducer, initialState);
	const [api, setApi] = useState();
	const [status, requestPermission] = Location.useForegroundPermissions();

	const getPermissions = async () => {
		await Location.requestForegroundPermissionsAsync();
	};
	const createApi = (location) => {
		return `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=c86b5f15ad6dfcdef91e22e3de0c1d1c`;
	};
	useEffect(() => {
		async function perm() {
			try {
				getPermissions();
			} catch (e) {
				console.log("Error with init project:" + e);
			}
		}
		perm();
	}, []);
	const getWeather = useCallback(async () => {
		let location = await Location.getCurrentPositionAsync({});

		dispatch({
			type: "FETCH_WEATHER_REQUEST",
		});
		await fetch(createApi(location))
			.then((data) => data.json())
			.then((data) => {
				dispatch({
					type: "FETCH_WEATHER_SUCCESS",
					payload: data,
				});
			})
			.catch((error) =>
				dispatch({ type: "FETCH_WEATHER_FAILURE", payload: error })
			);
	}, [api]);

	return (
		<WeatherContext.Provider
			value={{
				loading: state.loading,
				error: state.error,
				weather: state.weather,
				getWeather,
			}}
		>
			{children}
		</WeatherContext.Provider>
	);
};

export default WeatherState;
