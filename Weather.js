import React from "react";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
	Thunderstorm: {
		iconName: "weather-lightning",
		gradient: ["#2c3e50", "#3498db"],
		title: "Be careful!",
		subtitle: "Lightning might strike you"
	},
	Drizzle: {
		iconName: "weather-rainy",
		gradient: ["#fc00ff", "#00dbde"],
		title: "You might get wet",
		subtitle: "And the worms might delight"
	},
	Rain: {
		iconName: "weather-pouring",
		gradient: ["#43cea2", "#185a9d"],
		title: "Take an umbrella",
		subtitle: "It's a little too much"
	},
	Snow: {
		iconName: "weather-snowy",
		gradient: ["#00C9FF", "#92FE9D"],
		title: "The world is white",
		subtitle: "But you might slip, wear some boots"
	},
	Clear: {
		iconName: "weather-sunny",
		gradient: ["#FFB75E", "#ED8F03"],
		title: "Clear and sunny",
		subtitle: "You might get burned, wear a sunscreen"
	},
	Clouds: {
		iconName: "weather-cloudy",
		gradient: ["#73C8A9", "#373B44"],
		title: "A little cloudy",
		subtitle: "Meatballs don't fall from the skies"
	},
	Dust: {
		iconName: "weather-sunset",
		gradient: ["#948E99", "#2E1437"],
		title: "Desertpunk style",
		subtitle: "But do wear a mask, dust isn't good"
	},
	Haze: {
		iconName: "weather-fog",
		gradient: ["#2C7744", "#5A3F37"],
		title: "Not so purple",
		subtitle: "Haze all in my brain"
	},
	Mist: {
		iconName: "weather-hail",
		gradient: ["#360033", "#0b8793"],
		title: "Water water everywhere",
		subtitle: "But too small to drink, it's just a mist"
	},
	Default: {
		iconName: "adjust",
		gradient: ["#f0c27b", "#4b1248"],
		title: "It's my first time",
		subtitle: "I've never seen a weather like this"
	}
};

export default function Weather({ condition, temp }) {
	return (
		<LinearGradient
			colors={weatherOptions[condition].gradient}
			style={styles.container}
		>
			<StatusBar barStyle="light-content" />
			<View style={styles.halfContainer}>
				<MaterialCommunityIcons
					name={weatherOptions[condition].iconName}
					size={144}
					color="white"
				/>
				<Text style={styles.temp}>{temp}º</Text>
			</View>
			<View style={{ ...styles.halfContainer, ...styles.textContainer }}>
				<Text style={styles.title}>
					{weatherOptions[condition].title}
				</Text>
				<Text style={styles.subtitle}>
					{weatherOptions[condition].subtitle}
				</Text>
			</View>
		</LinearGradient>
	);
}
Weather.propTypes = {
	temp: PropTypes.number.isRequired,
	condition: PropTypes.oneOf([
		"Thunderstorm",
		"Drizzle",
		"Rain",
		"Snow",
		"Clear",
		"Clouds",
		"Haze",
		"Dust",
		"Mist"
	]).isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},

	halfContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},

	textContainer: {
		paddingHorizontal: 20,
		alignItems: "flex-start"
	},

	temp: {
		fontSize: 36,
		fontWeight: "500",
		color: "whitesmoke"
	},

	title: {
		fontSize: 32,
		fontWeight: "500",
		color: "whitesmoke",
		marginBottom: 10
	},
	subtitle: { fontSize: 24, fontWeight: "300", color: "whitesmoke" }
});
