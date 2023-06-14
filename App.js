import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./src/screens/main-screen";
import WeatherState from "./src/context/weather/weather-state";
export default function App() {
	return (
		<WeatherState>
			<View style={styles.container}>
				<MainScreen />
			</View>
		</WeatherState>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
