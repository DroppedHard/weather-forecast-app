import { Card, CardContent, Typography } from "@mui/material";
import { organismStyles } from "styles/generalStyles";
import type { WeatherSummaryResponse } from "types/types";

type SummaryFooterProps = {
	data: WeatherSummaryResponse;
};

export const SummaryFooter = ({ data }: SummaryFooterProps) => {
	const dominantWeatherText = data.dominant_weather
		? "Z opadami"
		: "Bez opadów";

	return (
		<Card sx={organismStyles.summaryFooter}>
			<CardContent>
				<Typography variant="body2" color="textSecondary">
					<strong>Skrajne temperatury:</strong> {data.min_temperature} /{" "}
					{data.max_temperature}
				</Typography>
				<Typography variant="body2" color="textSecondary">
					<strong>Skrajne odczuwalne temperatury:</strong>{" "}
					{data.min_apparent_temperature} / {data.max_apparent_temperature}
				</Typography>
				<Typography variant="body2" color="textSecondary">
					<strong>Średnie ciśnienie na lądzie:</strong>{" "}
					{data.avg_surface_pressure}
				</Typography>
				<Typography variant="body2" color="textSecondary">
					<strong>Średni czas ekspozycji na słońce:</strong>{" "}
					{data.avg_daylight_duration}
				</Typography>
				<Typography variant="body2" color="textSecondary">
					<strong>Podsumowanie pogody:</strong> {dominantWeatherText}
				</Typography>
			</CardContent>
		</Card>
	);
};
