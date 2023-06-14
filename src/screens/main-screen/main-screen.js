import React, { useEffect, useState, useContext } from "react";
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Pressable,
} from "react-native";
import WeatherContext from "../../context/weather/weather-context";

const MainScreen = () => {
	const { loading, error, weather, getWeather } = useContext(WeatherContext);

	useEffect(() => {
		getWeather();
	}, []);
	if (loading) {
		return <Text>Loading. Waiting please...</Text>;
	}

	return (
		<View>
			<Text>Main Screen </Text>
			<Text>Country: {weather.sys.country}</Text>
			<View>
				<Text>Weather:{weather.weather[0].description}</Text>
			</View>
			<View>
				<Text>Wind:</Text>
				<Text>deg:{weather.wind.deg}</Text>
				<Text>deg:{weather.wind.speed}</Text>
			</View>
			<View>
				<Pressable
					style={styles.btn}
					onPress={() => {
						getWeather();
					}}
				>
					<Text style={styles.btn_text}>Update</Text>
				</Pressable>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	btn: {
		width: "80%",
		paddingVertical: 10,
		paddingHorizontal: 14,

		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "blue",
		borderRadius: 10,
	},
	btn_text: {
		textAlign: "center",
	},
});
export default MainScreen;
