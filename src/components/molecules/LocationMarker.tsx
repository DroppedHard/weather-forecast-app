import type { LatLngTuple } from "leaflet";
import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import type { GeolocationData } from "types/types";

type LocatonMarkerProps = {
	setGeolocation: (newGeolocation: GeolocationData) => void;
};

export const LocationMarker = ({ setGeolocation }: LocatonMarkerProps) => {
	const [position, setPosition] = useState<LatLngTuple | null>(null);
	useMapEvents({
		click(event) {
			const { lat, lng } = event.latlng; // Get the lat/lng of the clicked point
			setPosition([lat, lng]); // Update the local marker position
			setGeolocation({ latitude: lat, longitude: lng });
		},
	});

	return position === null ? null : (
		<Marker position={position}>
			<Popup>Wybrana lokalizacja</Popup>
		</Marker>
	);
};
