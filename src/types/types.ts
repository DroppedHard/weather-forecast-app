export type GeolocationData = {
	latitude: number;
	longitude: number;
};

export type GeolocationContextDispatch = {
	location: GeolocationData;
	setLocation: (location: GeolocationData) => void;
};

export enum AlertSeverity {
	info = "info",
	success = "success",
	error = "error",
	warning = "warning",
}

export type PersonalizedAlertProps = {
	message: string;
	severity: AlertSeverity;
};

export type WeatherForecastResponse = {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	elevation: number;
	timezone: string;
	timezone_abbreviation: string;
	daily_units: {
		time: string;
		weather_code: string;
		temperature_2m_max: string;
		temperature_2m_min: string;
		estimated_energy_generated: string;
	};
	daily: {
		time: string[];
		weather_code: number[];
		temperature_2m_max: number[];
		temperature_2m_min: number[];
		estimated_energy_generated: number[];
	};
};

export type WeatherSummaryResponse = {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	elevation: number;
	timezone: string;
	timezone_abbreviation: string;
	avg_surface_pressure: string; // Includes units (e.g., "1004.0190476190477 hPa")
	avg_daylight_duration: string; // Includes units (e.g., "27551.70857142857 s")
	min_temperature: string; // Includes units (e.g., "1 hPa")
	max_temperature: string; // Includes units (e.g., "11.8 hPa")
	min_apparent_temperature: string; // Includes units (e.g., "0.5 hPa")
	max_apparent_temperature: string; // Includes units (e.g., "8.8 hPa")
	dominant_weather: boolean; // Indicates if weather is dominant
};
