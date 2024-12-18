import { Card, CardContent, Typography } from "@mui/material";
import type { WeatherSummaryResponse } from "types/types";

type SummaryFooterProps = {
	data: WeatherSummaryResponse;
};

export const SummaryFooter = ({ data }: SummaryFooterProps) => {
	const minTemperature = Number.parseFloat(data.min_temperature);
	const maxTemperature = Number.parseFloat(data.max_temperature);
	const avgPressure = Number.parseFloat(data.avg_surface_pressure);
	const daylightDuration = Number.parseFloat(data.avg_daylight_duration);

	const dominantWeatherText = data.dominant_weather
		? "Week with rainfall"
		: "Week without rainfall";

	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography variant="h6" gutterBottom>
					Weather Summary
				</Typography>
				<Typography variant="body2" color="textSecondary">
					<strong>Extreme Temperature:</strong> {minTemperature}°C to{" "}
					{maxTemperature}°C
				</Typography>
				<Typography variant="body2" color="textSecondary">
					<strong>Average Pressure:</strong> {avgPressure.toFixed(2)} hPa
				</Typography>
				<Typography variant="body2" color="textSecondary">
					<strong>Average Daylight Duration:</strong> {daylightDuration} seconds
				</Typography>
				<Typography variant="body2" color="textSecondary">
					<strong>Dominant Weather:</strong> {dominantWeatherText}
				</Typography>
			</CardContent>
		</Card>
	);
};
