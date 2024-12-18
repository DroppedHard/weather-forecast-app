import type { LatLngTuple } from "leaflet";
import L from "leaflet";
import { useEffect, useRef } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

type InitialMarkerProps = {
	position: LatLngTuple;
};

const homeIcon = new L.Icon({
	iconUrl: "/icons/markers/home.svg", // Replace with your icon path
	iconSize: [30, 30], // Adjust size as needed
	iconAnchor: [15, 30], // Anchor point (center bottom of the icon)
	popupAnchor: [0, -30], // Position of popup relative to the icon
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
