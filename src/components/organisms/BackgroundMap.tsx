import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LocationMarker } from "components/molecules";
import { InitialMarker } from "components/molecules/InitialMarker";
import type { LatLngTuple } from "leaflet";
import type { GeolocationData } from "types/types";

type BackgroundMapProps = {
	initialGeolocation?: GeolocationData;
	setGeolocation: (newGeolocation: GeolocationData) => void;
};

export const BackgroundMap = ({
	initialGeolocation,
	setGeolocation,
}: BackgroundMapProps) => {
	const center: LatLngTuple | undefined = initialGeolocation
		? [initialGeolocation.latitude, initialGeolocation.longitude]
		: [0, 0];

	return (
		<MapContainer
			center={center}
			zoom={13}
			style={{ height: "100vh", width: "100%", zIndex: 10 }}
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution="&copy; OpenStreetMap contributors"
			/>
			{initialGeolocation && (
				<InitialMarker
					position={[initialGeolocation.latitude, initialGeolocation.longitude]}
				/>
			)}
			<LocationMarker setGeolocation={setGeolocation} />
		</MapContainer>
	);
};
