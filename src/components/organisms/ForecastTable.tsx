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
		display: "flex", // Enable flexbox
		justifyContent: "space-between", // Spread content to left and right
		alignItems: "center", // Align vertically in the middle
	},
	tableCell: {
		fontSize: 12,
		textAlign: "center",
	},
};

const headerTextMapping = {
	time: "Dzień",
	weather_code: "Kod pogody",
	temperature_2m_max: "Maks. temperatura",
	temperature_2m_min: "Min. temperatura",
	estimated_energy_generated: "Estymata energii",
};

export const ForecastTable = ({ data }: ForecastTableProps) => {
	const { daily, daily_units } = data;
	return (
		<>
			<TableContainer
				component={Paper}
				sx={{ maxWidth: "100%", margin: "1rem auto" }}
			>
				<Table>
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
		</>
	);
};
