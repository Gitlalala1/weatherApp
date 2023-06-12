import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
const MainScreen = () => {
	const [location, setLocation] = useState(null);
	const [status, requestPermission] = Location.useForegroundPermissions();

	useEffect(() => {
		(async () => {
			await Location.requestForegroundPermissionsAsync();
			let location = await Location.getCurrentPositionAsync({});
			setLocation(location);
		})();
	}, []);
	let text = JSON.stringify(location);
	return (
		<View>
			<Text>Main Screen {text}</Text>
		</View>
	);
};

export default MainScreen;
