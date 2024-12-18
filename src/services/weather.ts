import axios from "axios";
import type { GeolocationData, WeatherForecastResponse } from "types/types";
import { API } from "./config";

export const getNextWeekForecast = async (geolocation: GeolocationData) => {
	const { data } = await axios.get(`${API}forecast`, {
		params: {
			Latitude: geolocation.latitude,
			Longitude: geolocation.longitude,
		},
	});
	return data as WeatherForecastResponse;
};

export const getNextWeekSummary = async (geolocation: GeolocationData) => {
	const { data } = await axios.get(`${API}summary`, {
		params: {
			Latitude: geolocation.latitude,
			Longitude: geolocation.longitude,
		},
	});
	return data as WeatherForecastResponse;
};
