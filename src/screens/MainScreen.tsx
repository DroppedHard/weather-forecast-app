import { BackgroundMap } from "components/organisms";
import { useGeolocation } from "components/organisms/hooks";
import type { GeolocationData } from "types/types";

export function MainScreen() {
	const { geolocation, setGeolocation } = useGeolocation();
	console.log(location);
	return (
		<>
			<BackgroundMap
				key={
					geolocation
						? `${geolocation.latitude},${geolocation.longitude}`
						: "0,0"
				}
				initialGeolocation={geolocation}
				setGeolocation={(newGeolocation: GeolocationData) =>
					setGeolocation(newGeolocation)
				}
			/>
		</>
	);
}
