import { LocationPermissionModal } from "components/molecules";
import { useEffect, useState } from "react";
import type { GeolocationData } from "types/types";
import { useOverlay } from "../context";

export const useGeolocation = () => {
	const [geolocation, setGeolocation] = useState<GeolocationData | undefined>(
		undefined,
	);
	const [selectedGeolocation, setSelectedGeolocation] = useState<
		GeolocationData | undefined
	>(undefined);
	const { showOverlay, hideOverlay } = useOverlay();

	useEffect(() => {
		showOverlay(
			<LocationPermissionModal
				handleClose={hideOverlay}
				setGeolocation={(geolocation: GeolocationCoordinates) =>
					setGeolocation({
						latitude: geolocation.latitude,
						longitude: geolocation.longitude,
					})
				}
				isOpen={true}
			/>,
		);
	}, [hideOverlay, showOverlay]);
	return {
		geolocation,
		setGeolocation,
		selectedGeolocation,
		setSelectedGeolocation,
	};
};
