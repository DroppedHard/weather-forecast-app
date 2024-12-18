import { BackgroundMap } from "components/organisms";
import { useGeolocation } from "components/organisms/hooks";
import type { GeolocationData } from "types/types";

export const MainScreen = () => {
	const { geolocation, selectedGeolocation, setSelectedGeolocation } =
		useGeolocation();
	console.log(geolocation, selectedGeolocation);
	return (
		<>
			<BackgroundMap
				initialGeolocation={geolocation}
				setGeolocation={(newGeolocation: GeolocationData) =>
					setSelectedGeolocation(newGeolocation)
				}
			/>
		</>
	);
};
