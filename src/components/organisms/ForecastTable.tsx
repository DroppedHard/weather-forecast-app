import InfoIcon from "@mui/icons-material/Info";
import {
	Box,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import PersonalizedPopup from "components/atoms/PersonalizedPopup";
import type { WeatherForecastResponse } from "types/types";

type ForecastTableProps = {
	data: WeatherForecastResponse;
};

const style = {
	infoIcon: {
		fontSize: 12,
	},
	headerText: {
		fontSize: 12,
		display: "flex", // Enable flexbox
		justifyContent: "space-between", // Spread content to left and right
		alignItems: "center", // Align vertically in the middle
		lineHeight: 1.2,
	},
	tableCell: {
		fontSize: 12,
		textAlign: "center",
		padding: "4px 8px",
	},
};

const headerTextMapping = {
	time: "Dzień",
	weather_code: "Pogoda",
	temperature_2m_max: "Max temp",
	temperature_2m_min: "Min temp",
	estimated_energy_generated: "szac. energia",
};

export const ForecastTable = ({ data }: ForecastTableProps) => {
	const { daily, daily_units } = data;
	return (
		<TableContainer
			component={Paper}
			sx={{ maxWidth: "300px", maxHeight: "300px" }}
		>
			<Table size="small">
				<TableHead>
					<TableRow>
						{Object.entries(daily_units).map(([key, unit]) => (
							<TableCell key={key}>
								<Box sx={style.headerText}>
									<span>
										{
											headerTextMapping[
												(key as keyof typeof headerTextMapping) || key
											]
										}
									</span>
									<PersonalizedPopup
										Icon={<InfoIcon sx={style.infoIcon} />}
										PopupContent={<i>{unit}</i>}
									/>
								</Box>
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{daily.time.map((date, index) => (
						<TableRow key={date}>
							{Object.keys(headerTextMapping).map((key) => (
								<TableCell key={key} sx={style.tableCell}>
									{key === "estimated_energy_generated"
										? (
												daily[key as keyof typeof daily][index] as number
											).toFixed(2)
										: daily[key as keyof typeof daily][index]}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
