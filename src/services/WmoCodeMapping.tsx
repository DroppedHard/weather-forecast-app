import {
	AcUnit,
	Cloud,
	CloudQueue,
	FlashOn,
	Grain,
	QuestionMark,
	Thunderstorm,
	WaterDrop,
} from "@mui/icons-material";
import type { ReactElement } from "react";

type WeatherCodeData = {
	code: number;
	description: string;
	icon: (props: {
		fontSize: "small" | "inherit" | "large" | "medium";
	}) => ReactElement;
};

export const weatherCodeMapping: Record<number, WeatherCodeData> = {
	// Clear and cloudy weather
	0: {
		code: 0,
		description: "Cloud development not observed or not observable",
		icon: (props) => <QuestionMark {...props} />,
	},
	1: {
		code: 1,
		description: "Clouds generally dissolving or becoming less developed",
		icon: (props) => <CloudQueue {...props} />,
	},
	2: {
		code: 2,
		description: "State of sky on the whole unchanged",
		icon: (props) => <CloudQueue {...props} />,
	},
	3: {
		code: 3,
		description: "Clouds generally forming or developing",
		icon: (props) => <Cloud {...props} />,
	},
	4: {
		code: 4,
		description: "Visibility reduced by smoke",
		icon: (props) => <QuestionMark {...props} />,
	},
	5: {
		code: 5,
		description: "Haze",
		icon: (props) => <QuestionMark {...props} />,
	},
	6: {
		code: 6,
		description: "Widespread dust in suspension",
		icon: (props) => <QuestionMark {...props} />,
	},
	7: {
		code: 7,
		description: "Dust or sand raised by wind",
		icon: (props) => <QuestionMark {...props} />,
	},
	8: {
		code: 8,
		description: "Well developed dust whirl(s)",
		icon: (props) => <QuestionMark {...props} />,
	},
	9: {
		code: 9,
		description: "Duststorm or sandstorm",
		icon: (props) => <QuestionMark {...props} />,
	},
	10: {
		code: 10,
		description: "Mist",
		icon: (props) => <CloudQueue {...props} />,
	},
	11: {
		code: 11,
		description: "Shallow fog or ice fog",
		icon: (props) => <CloudQueue {...props} />,
	},
	12: {
		code: 12,
		description: "More or less continuous fog",
		icon: (props) => <CloudQueue {...props} />,
	},
	13: {
		code: 13,
		description: "Lightning visible, no thunder heard",
		icon: (props) => <FlashOn {...props} />,
	},
	14: {
		code: 14,
		description: "Precipitation within sight, not reaching the ground",
		icon: (props) => <WaterDrop {...props} />,
	},
	15: {
		code: 15,
		description: "Precipitation within sight, distant",
		icon: (props) => <WaterDrop {...props} />,
	},
	16: {
		code: 16,
		description: "Precipitation within sight, near",
		icon: (props) => <WaterDrop {...props} />,
	},
	17: {
		code: 17,
		description: "Thunderstorm, no precipitation",
		icon: (props) => <Thunderstorm {...props} />,
	},
	18: {
		code: 18,
		description: "Squalls",
		icon: (props) => <Thunderstorm {...props} />,
	},
	19: {
		code: 19,
		description: "Funnel cloud(s) (tornado or water-spout)",
		icon: (props) => <Thunderstorm {...props} />,
	},
	// Precipitation, fog, ice fog, or thunderstorms
	20: {
		code: 20,
		description: "Drizzle or snow grains, not falling as showers",
		icon: (props) => <Grain {...props} />,
	},
	21: {
		code: 21,
		description: "Rain (not freezing)",
		icon: (props) => <WaterDrop {...props} />,
	},
	22: { code: 22, description: "Snow", icon: (props) => <AcUnit {...props} /> },
	23: {
		code: 23,
		description: "Rain and snow or ice pellets",
		icon: (props) => <WaterDrop {...props} />,
	},
	24: {
		code: 24,
		description: "Freezing drizzle or freezing rain",
		icon: (props) => <AcUnit {...props} />,
	},
	25: {
		code: 25,
		description: "Shower(s) of rain",
		icon: (props) => <WaterDrop {...props} />,
	},
	26: {
		code: 26,
		description: "Shower(s) of snow or rain and snow",
		icon: (props) => <AcUnit {...props} />,
	},
	27: {
		code: 27,
		description: "Shower(s) of hail, or rain and hail",
		icon: (props) => <FlashOn {...props} />,
	},
	28: {
		code: 28,
		description: "Fog or ice fog",
		icon: (props) => <CloudQueue {...props} />,
	},
	29: {
		code: 29,
		description: "Thunderstorm (with or without precipitation)",
		icon: (props) => <Thunderstorm {...props} />,
	},
	// Duststorm, sandstorm, drifting or blowing snow
	30: {
		code: 30,
		description: "Slight or moderate duststorm or sandstorm",
		icon: (props) => <QuestionMark {...props} />,
	},
	31: {
		code: 31,
		description: "No appreciable change during the hour",
		icon: (props) => <QuestionMark {...props} />,
	},
	32: {
		code: 32,
		description: "Has begun or increased",
		icon: (props) => <QuestionMark {...props} />,
	},
	33: {
		code: 33,
		description: "Severe duststorm or sandstorm",
		icon: (props) => <QuestionMark {...props} />,
	},
	34: {
		code: 34,
		description: "No appreciable change",
		icon: (props) => <QuestionMark {...props} />,
	},
	35: {
		code: 35,
		description: "Has begun or increased",
		icon: (props) => <QuestionMark {...props} />,
	},
	36: {
		code: 36,
		description: "Slight or moderate blowing snow",
		icon: (props) => <AcUnit {...props} />,
	},
	37: {
		code: 37,
		description: "Heavy drifting snow",
		icon: (props) => <AcUnit {...props} />,
	},
	38: {
		code: 38,
		description: "Slight or moderate blowing snow (high)",
		icon: (props) => <AcUnit {...props} />,
	},
	39: {
		code: 39,
		description: "Heavy drifting snow",
		icon: (props) => <AcUnit {...props} />,
	},
	// Fog or ice fog at the time of observation
	40: {
		code: 40,
		description: "Fog at a distance",
		icon: (props) => <CloudQueue {...props} />,
	},
	41: {
		code: 41,
		description: "Fog in patches",
		icon: (props) => <CloudQueue {...props} />,
	},
	42: {
		code: 42,
		description: "Fog, sky visible, has become thinner",
		icon: (props) => <CloudQueue {...props} />,
	},
	43: {
		code: 43,
		description: "Fog, sky invisible",
		icon: (props) => <CloudQueue {...props} />,
	},
	44: {
		code: 44,
		description: "Fog, sky visible, no change",
		icon: (props) => <CloudQueue {...props} />,
	},
	45: {
		code: 45,
		description: "Fog, sky invisible",
		icon: (props) => <CloudQueue {...props} />,
	},
	46: {
		code: 46,
		description: "Fog, sky visible, has become thicker",
		icon: (props) => <CloudQueue {...props} />,
	},
	47: {
		code: 47,
		description: "Fog, sky invisible",
		icon: (props) => <CloudQueue {...props} />,
	},
	48: {
		code: 48,
		description: "Fog, depositing rime, sky visible",
		icon: (props) => <CloudQueue {...props} />,
	},
	49: {
		code: 49,
		description: "Fog, depositing rime, sky invisible",
		icon: (props) => <CloudQueue {...props} />,
	},
	// Precipitation at the station at the time of observation
	50: {
		code: 50,
		description: "Intermittent precipitation",
		icon: (props) => <WaterDrop {...props} />,
	},
	51: {
		code: 51,
		description: "Shower(s)",
		icon: (props) => <WaterDrop {...props} />,
	},
	52: {
		code: 52,
		description: "Shower(s) of snow",
		icon: (props) => <AcUnit {...props} />,
	},
	53: {
		code: 53,
		description: "Shower(s) of hail",
		icon: (props) => <FlashOn {...props} />,
	},
	54: {
		code: 54,
		description: "Rain, falling continuously",
		icon: (props) => <WaterDrop {...props} />,
	},
	55: {
		code: 55,
		description: "Snow, falling continuously",
		icon: (props) => <AcUnit {...props} />,
	},
	56: {
		code: 56,
		description: "Shower(s) of rain and snow",
		icon: (props) => <WaterDrop {...props} />,
	},
	57: {
		code: 57,
		description: "Shower(s) of ice pellets",
		icon: (props) => <WaterDrop {...props} />,
	},
	58: {
		code: 58,
		description: "Freezing rain",
		icon: (props) => <AcUnit {...props} />,
	},
	59: {
		code: 59,
		description: "Shower(s) of rain and ice pellets",
		icon: (props) => <WaterDrop {...props} />,
	},

	60: {
		code: 60,
		description: "Intermittent rain",
		icon: (props) => <WaterDrop {...props} />,
	},
	61: {
		code: 61,
		description: "Continuous light rain",
		icon: (props) => <WaterDrop {...props} />,
	},
	62: {
		code: 62,
		description: "Continuous heavy rain",
		icon: (props) => <WaterDrop {...props} />,
	},
	63: {
		code: 63,
		description: "Intermittent snow",
		icon: (props) => <AcUnit {...props} />,
	},
	64: {
		code: 64,
		description: "Continuous light snow",
		icon: (props) => <AcUnit {...props} />,
	},
	65: {
		code: 65,
		description: "Continuous heavy snow",
		icon: (props) => <AcUnit {...props} />,
	},
	66: {
		code: 66,
		description: "Intermittent hail",
		icon: (props) => <FlashOn {...props} />,
	},
	67: {
		code: 67,
		description: "Continuous hail",
		icon: (props) => <FlashOn {...props} />,
	},
	68: {
		code: 68,
		description: "Shower(s) of rain and snow (light)",
		icon: (props) => <WaterDrop {...props} />,
	},
	69: {
		code: 69,
		description: "Shower(s) of rain and snow (heavy)",
		icon: (props) => <WaterDrop {...props} />,
	},
	70: {
		code: 70,
		description: "Light thunderstorm with rain",
		icon: (props) => <Thunderstorm {...props} />,
	},
	71: {
		code: 71,
		description: "Heavy thunderstorm with rain",
		icon: (props) => <Thunderstorm {...props} />,
	},
	72: {
		code: 72,
		description: "Light thunderstorm with snow",
		icon: (props) => <Thunderstorm {...props} />,
	},
	73: {
		code: 73,
		description: "Heavy thunderstorm with snow",
		icon: (props) => <Thunderstorm {...props} />,
	},
	74: {
		code: 74,
		description: "Light thunderstorm with hail",
		icon: (props) => <Thunderstorm {...props} />,
	},
	75: {
		code: 75,
		description: "Heavy thunderstorm with hail",
		icon: (props) => <Thunderstorm {...props} />,
	},
	76: {
		code: 76,
		description: "Dust or sand storm",
		icon: (props) => <QuestionMark {...props} />,
	},
	77: {
		code: 77,
		description: "Blizzard or snowstorm",
		icon: (props) => <AcUnit {...props} />,
	},
	78: {
		code: 78,
		description: "Freezing fog",
		icon: (props) => <CloudQueue {...props} />,
	},
	79: {
		code: 79,
		description: "Rime ice",
		icon: (props) => <AcUnit {...props} />,
	},
	80: {
		code: 80,
		description: "Light shower(s) of rain",
		icon: (props) => <WaterDrop {...props} />,
	},
	81: {
		code: 81,
		description: "Heavy shower(s) of rain",
		icon: (props) => <WaterDrop {...props} />,
	},
	82: {
		code: 82,
		description: "Light shower(s) of snow",
		icon: (props) => <AcUnit {...props} />,
	},
	83: {
		code: 83,
		description: "Heavy shower(s) of snow",
		icon: (props) => <AcUnit {...props} />,
	},
	84: {
		code: 84,
		description: "Light shower(s) of hail",
		icon: (props) => <FlashOn {...props} />,
	},
	85: {
		code: 85,
		description: "Heavy shower(s) of hail",
		icon: (props) => <FlashOn {...props} />,
	},
	86: {
		code: 86,
		description: "Thunderstorm with light rain",
		icon: (props) => <Thunderstorm {...props} />,
	},
	87: {
		code: 87,
		description: "Thunderstorm with heavy rain",
		icon: (props) => <Thunderstorm {...props} />,
	},
	88: {
		code: 88,
		description: "Thunderstorm with light snow",
		icon: (props) => <Thunderstorm {...props} />,
	},
	89: {
		code: 89,
		description: "Thunderstorm with heavy snow",
		icon: (props) => <Thunderstorm {...props} />,
	},
	90: {
		code: 90,
		description: "Thunderstorm with light hail",
		icon: (props) => <Thunderstorm {...props} />,
	},
	91: {
		code: 91,
		description: "Thunderstorm with heavy hail",
		icon: (props) => <Thunderstorm {...props} />,
	},
	92: {
		code: 92,
		description: "Dust or sand in suspension",
		icon: (props) => <QuestionMark {...props} />,
	},
	93: {
		code: 93,
		description: "Blizzard",
		icon: (props) => <AcUnit {...props} />,
	},
	94: {
		code: 94,
		description: "Funnel cloud or tornado",
		icon: (props) => <Thunderstorm {...props} />,
	},
	95: {
		code: 95,
		description: "Hurricane or typhoon",
		icon: (props) => <Thunderstorm {...props} />,
	},
	96: {
		code: 96,
		description: "Severe thunderstorm with heavy rain",
		icon: (props) => <Thunderstorm {...props} />,
	},
	97: {
		code: 97,
		description: "Severe thunderstorm with heavy snow",
		icon: (props) => <Thunderstorm {...props} />,
	},
	98: {
		code: 98,
		description: "Severe thunderstorm with heavy hail",
		icon: (props) => <Thunderstorm {...props} />,
	},
	99: {
		code: 99,
		description: "Tornado or waterspout",
		icon: (props) => <Thunderstorm {...props} />,
	},
};
