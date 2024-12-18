import InfoIcon from "@mui/icons-material/Info";
import TableChartIcon from "@mui/icons-material/TableChart";
import {
	Box,
	Button,
	Collapse,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import { WmoWeatherCodeIcon } from "components/atoms";
import PersonalizedPopup from "components/atoms/PersonalizedPopup";
import { useState } from "react";
import { formatDate, headerTextMapping } from "services/utils";
import { organismStyles } from "styles/generalStyles";
import type { WeatherForecastResponse } from "types/types";

type ForecastTableProps = {
	data: WeatherForecastResponse;
};

export const ForecastTable = ({ data }: ForecastTableProps) => {
	const { daily, daily_units } = data;

	const [isTableVisible, setIsTableVisible] = useState(false);
	const handleToggleTable = () => {
		setIsTableVisible((prev) => !prev); // Toggle visibility of the table
	};

	const generateValues = (key: string, value: string | number) => {
		switch (key) {
			case "time":
				return (
					<PersonalizedPopup
						iconOrText={formatDate(value as string)}
						popupText={daily_units[key]}
					/>
				);
			case "weather_code":
				return <WmoWeatherCodeIcon code={value as number} fontSize="small" />;
			case "temperature_2m_max":
			case "temperature_2m_min":
				return (
					<PersonalizedPopup
						iconOrText={value as string}
						popupText={daily_units[key]}
					/>
				);
			case "estimated_energy_generated":
				return (
					<PersonalizedPopup
						iconOrText={(value as number).toFixed(2)}
						popupText={daily_units[key]}
					/>
				);
		}
	};

	return (
		<div>
			<Box sx={organismStyles.forecastTable.buttonBox}>
				<Button
					variant="contained"
					onClick={handleToggleTable}
					startIcon={<TableChartIcon />}
				/>
			</Box>
			<Collapse in={isTableVisible}>
				<TableContainer
					component={Paper}
					sx={organismStyles.forecastTable.table}
				>
					<Table size="small">
						<TableHead>
							<TableRow>
								{Object.entries(daily_units).map(([key, unit]) => (
									<TableCell key={key}>
										<Box sx={organismStyles.forecastTable.headerText}>
											<span>
												{
													headerTextMapping[
														(key as keyof typeof headerTextMapping) || key
													]
												}
											</span>
											<PersonalizedPopup
												iconOrText={
													<InfoIcon
														sx={organismStyles.forecastTable.infoIcon}
													/>
												}
												popupText={unit}
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
										<TableCell
											key={key}
											sx={organismStyles.forecastTable.tableCell}
										>
											{generateValues(
												key,
												daily[key as keyof typeof daily][index],
											)}
										</TableCell>
									))}
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Collapse>
		</div>
	);
};
