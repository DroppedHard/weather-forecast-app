import type { LatLngTuple } from "leaflet";
import L from "leaflet";
import { useEffect, useRef } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

type InitialMarkerProps = {
	position: LatLngTuple;
};

const homeIcon = new L.Icon({
	iconUrl: "/icons/markers/home.svg",
	iconSize: [30, 30],
	iconAnchor: [15, 30],
	popupAnchor: [0, -30],
});

export const InitialMarker = ({ position }: InitialMarkerProps) => {
	const map = useMap();
	const hasCentered = useRef(false);
	useEffect(() => {
		if (!hasCentered.current) {
			map.setView(position, map.getZoom());
			hasCentered.current = true;
		}
	}, [map, position]);

	return position === null ? null : (
		<Marker position={position} icon={homeIcon}>
			<Popup>Twoja lokalizacja</Popup>
		</Marker>
	);
};
