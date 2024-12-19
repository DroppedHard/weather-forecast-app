import { PersonalizedAlert } from "components/atoms";
import { LocationPermissionModal } from "components/molecules";
import {
	useGetWeeklyForecast,
	useGetWeeklySummary,
} from "components/organisms/hooks/UseWeather";
import { useEffect, useState } from "react";
import { AlertSeverity, type GeolocationData } from "types/types";
import { useOverlay } from "../context";

export const useGeolocation = () => {
	const [initialGeolocation, setInitialGeolocation] = useState<
		GeolocationData | undefined
	>(undefined);
	const [selectedGeolocation, setSelectedGeolocation] = useState<
		GeolocationData | undefined
	>(undefined);
	const [currentGeolocation, setCurrentGeolocation] = useState<
		GeolocationData | undefined
	>(undefined);
	const { showOverlay, hideOverlay, showAlert } = useOverlay();

	const forecast = useGetWeeklyForecast(currentGeolocation as GeolocationData);
	const summary = useGetWeeklySummary(currentGeolocation as GeolocationData);

	useEffect(() => {
		showOverlay(
			<LocationPermissionModal
				handleClose={hideOverlay}
				setGeolocation={(geolocation: GeolocationCoordinates) =>
					setInitialGeolocation({
						latitude: geolocation.latitude,
						longitude: geolocation.longitude,
					})
				}
				isOpen={true}
			/>,
		);
	}, [hideOverlay, showOverlay]);

	useEffect(() => {
		if (selectedGeolocation) {
			if (
				currentGeolocation?.latitude !== selectedGeolocation.latitude ||
				currentGeolocation?.longitude !== selectedGeolocation.longitude
			) {
				setCurrentGeolocation(selectedGeolocation);
			}
		} else if (initialGeolocation) {
			if (
				currentGeolocation?.latitude !== initialGeolocation.latitude ||
				currentGeolocation?.longitude !== initialGeolocation.longitude
			) {
				setCurrentGeolocation(initialGeolocation);
			}
		}
	}, [initialGeolocation, selectedGeolocation, currentGeolocation]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (currentGeolocation) {
			forecast.refetch();
			summary.refetch();
			showAlert(
				<PersonalizedAlert
					message={`Current location: ${currentGeolocation.latitude.toFixed(4)}, ${currentGeolocation.longitude.toFixed(4)}`}
					severity={AlertSeverity.info}
				/>,
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentGeolocation]);

	return {
		initialGeolocation,
		setSelectedGeolocation,
		forecast,
		summary,
	};
};
