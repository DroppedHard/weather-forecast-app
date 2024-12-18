import { weatherCodeMapping } from "services/WmoCodeMapping";
import PersonalizedPopup from "./PersonalizedPopup";

type WmoWeatherCodeIconProps = {
	code: number;
	fontSize?: "small" | "inherit" | "large" | "medium";
};

export const WmoWeatherCodeIcon = ({
	code,
	fontSize = "medium",
}: WmoWeatherCodeIconProps) => {
	const weatherData = weatherCodeMapping[code];
	return (
		<PersonalizedPopup
			iconOrText={weatherData.icon({ fontSize })}
			popupText={weatherData.description}
		/>
	);
};
