import {
	AcUnit,
	Cloud,
	CloudQueue,
	FlashOn,
	Grain,
	QuestionMark,
	Thunderstorm,
	WaterDrop,
	WbSunny,
} from "@mui/icons-material";
import { Icon } from "@mui/material";
type WeatherCodeData = {
	code: number;
	description: string;
	icon: React.ReactNode; // Material UI Icon
};

const weatherCodeMapping: Record<number, WeatherCodeData> = {
	// Clear and cloudy weather
	0: { code: 0, description: "Clear sky", icon: <WbSunny /> },
	1: { code: 1, description: "Mainly clear", icon: <WbSunny /> },
	2: { code: 2, description: "Partly cloudy", icon: <CloudQueue /> },
	3: { code: 3, description: "Overcast", icon: <Cloud /> },

	// Fog
	45: { code: 45, description: "Fog", icon: <CloudQueue /> },
	48: { code: 48, description: "Rime fog", icon: <CloudQueue /> },

	// Drizzle
	51: { code: 51, description: "Drizzle: Light intensity", icon: <Grain /> },
	53: { code: 53, description: "Drizzle: Moderate", icon: <Grain /> },
	55: { code: 55, description: "Drizzle: Dense intensity", icon: <Grain /> },

	// Freezing drizzle
	56: { code: 56, description: "Freezing drizzle: Light", icon: <AcUnit /> },
	57: { code: 57, description: "Freezing drizzle: Dense", icon: <AcUnit /> },

	// Rain
	61: { code: 61, description: "Rain: Slight", icon: <WaterDrop /> },
	63: { code: 63, description: "Rain: Moderate", icon: <WaterDrop /> },
	65: { code: 65, description: "Rain: Heavy", icon: <WaterDrop /> },

	// Freezing rain
	66: { code: 66, description: "Freezing rain: Light", icon: <AcUnit /> },
	67: { code: 67, description: "Freezing rain: Heavy", icon: <AcUnit /> },

	// Snowfall
	71: { code: 71, description: "Snowfall: Slight", icon: <AcUnit /> },
	73: { code: 73, description: "Snowfall: Moderate", icon: <AcUnit /> },
	75: { code: 75, description: "Snowfall: Heavy", icon: <AcUnit /> },
	77: { code: 77, description: "Snow grains", icon: <AcUnit /> },

	// Rain showers
	80: { code: 80, description: "Rain showers: Slight", icon: <WaterDrop /> },
	81: { code: 81, description: "Rain showers: Moderate", icon: <WaterDrop /> },
	82: { code: 82, description: "Rain showers: Violent", icon: <FlashOn /> },

	// Snow showers
	85: { code: 85, description: "Snow showers: Slight", icon: <AcUnit /> },
	86: { code: 86, description: "Snow showers: Heavy", icon: <AcUnit /> },

	// Thunderstorms
	95: {
		code: 95,
		description: "Thunderstorm: Slight or moderate",
		icon: <Thunderstorm />,
	},
	96: {
		code: 96,
		description: "Thunderstorm with slight hail",
		icon: <Thunderstorm />,
	},
	99: {
		code: 99,
		description: "Thunderstorm with heavy hail",
		icon: <Thunderstorm />,
	},

	// Reserved/Unused codes
	...Object.fromEntries(
		Array.from({ length: 100 }, (_, i) => i).map((code) => [
			code,
			{
				code,
				description: `Unused or unknown code: ${code}`,
				icon: <QuestionMark />,
			},
		]),
	),
};

type WmoWeatherCodeIconProps = {
	code: number;
};

// TO BE TESTED!

export const WmoWeatherCodeIcon = ({ code }: WmoWeatherCodeIconProps) => {
	const weatherData = weatherCodeMapping[code];
	return <Icon>{weatherData.icon}</Icon>;
};
