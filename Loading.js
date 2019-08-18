import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
	return (
		<LinearGradient
			colors={["#c9ffbf", "#ffafbd"]}
			style={styles.container}
		>
			<StatusBar barStyle="light-content" />
			<Text style={styles.text}>Getting the weather...</Text>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
		paddingHorizontal: 30,
		paddingVertical: 100
	},
	text: {
		color: "whitesmoke",
		fontSize: 30,
		fontWeight: "500"
	}
});
