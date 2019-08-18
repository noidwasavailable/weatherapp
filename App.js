import React from "react";
import { Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";

import Loading from "./Loading";
import Weather from "./Weather";

const APIKEY = "6b90cafcbba53a2cdd0ccbf41d4b72a8";
export default class extends React.Component {
	state = {
		isLoading: true
	};

	getWeather = async (latitude, longitude) => {
		try {
			const {
				data: {
					main: { temp },
					weather
				}
			} = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${APIKEY}&units=metric`
			);
			this.setState({
				isLoading: false,
				condition: weather[0].main,
				temp
			});
		} catch (error) {
			Alert.alert(
				"Oops",
				"There was an error while getting the weather."
			);
		}
	};

	getLocation = async () => {
		try {
			await Location.requestPermissionsAsync();
			const {
				coords: { latitude, longitude }
			} = await Location.getCurrentPositionAsync();

			//Send lat and long to API and get weather
			this.getWeather(latitude, longitude);
		} catch (error) {
			Alert.alert(
				"Request Permission Denied",
				"Location Access is required to run this app."
			);
		}
	};
	componentDidMount() {
		this.getLocation();
	}
	render() {
		const { isLoading, temp, condition } = this.state;
		return isLoading ? (
			<Loading />
		) : (
			<Weather temp={Math.round(temp)} condition={condition} />
		);
	}
}
