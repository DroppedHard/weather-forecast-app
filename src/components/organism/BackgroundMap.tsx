import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const BackgroundMap = () => {
	return (
		<MapContainer
			center={[51.505, -0.09]}
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
