import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngTuple } from "leaflet";
import type { GeolocationData } from "types/types";

type BackgroundMapProps = {
	initialGeolocation?: GeolocationData;
	setGeolocation: (newGeolocation: GeolocationData) => void;
};

export const BackgroundMap = ({
	initialGeolocation: location,
}: BackgroundMapProps) => {
	const center: LatLngTuple = location
		? [location.latitude, location.longitude]
		: [0, 0];
	return (
		<MapContainer
			center={center}
			zoom={5}
			style={{ height: "100vh", width: "100%" }}
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution="&copy; OpenStreetMap contributors"
			/>
			{/* Add Markers, Popups, or Overlays here */}
		</MapContainer>
	);
};
