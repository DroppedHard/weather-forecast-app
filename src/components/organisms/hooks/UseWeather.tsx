import { useQuery } from "@tanstack/react-query";
import { weatherApiKeys } from "services/queryKeyGen";
import { getNextWeekForecast, getNextWeekSummary } from "services/weather";
import type {
	GeolocationData,
	WeatherForecastResponse,
	WeatherSummaryResponse,
} from "types/types";

export const useGetWeeklyForecast = (geolocation: GeolocationData) => {
	return useQuery<WeatherForecastResponse, Error>({
		queryKey: weatherApiKeys.forecast,
		queryFn: async () => getNextWeekForecast(geolocation),
		enabled: false,
	});
};

export const useGetWeeklySummary = (geolocation: GeolocationData) => {
	return useQuery<WeatherSummaryResponse, Error>({
		queryKey: weatherApiKeys.summary,
		queryFn: async () => getNextWeekSummary(geolocation),
		enabled: false,
	});
};
