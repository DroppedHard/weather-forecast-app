import axios from "axios";
import type {
	GeolocationData,
	WeatherForecastResponse,
	WeatherSummaryResponse,
} from "types/types";
import { API } from "./config";

export const getNextWeekForecast = async (geolocation: GeolocationData) => {
	try {
		const { data } = await axios.get(`${API}forecast`, {
			params: {
				Latitude: geolocation.latitude,
				Longitude: geolocation.longitude,
			},
		});
		return data as WeatherForecastResponse;
	} catch (error) {
		console.error("Error fetching forecast", error);
		throw error;
	}
};

export const getNextWeekSummary = async (geolocation: GeolocationData) => {
	try {
		const { data } = await axios.get(`${API}summary`, {
			params: {
				Latitude: geolocation.latitude,
				Longitude: geolocation.longitude,
			},
		});
		return data as WeatherSummaryResponse;
	} catch (error) {
		console.error("Error fetching forecast", error);
		throw error;
	}
};
