import type { LatLngTuple } from "leaflet";
import { useEffect, useRef } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

type InitialMarkerProps = {
	position: LatLngTuple;
};

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
		<Marker position={position}>
			<Popup>Twoja lokalizacja</Popup>
		</Marker>
	);
};
