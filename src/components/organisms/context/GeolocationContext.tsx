import { type ReactNode, createContext, useEffect, useState } from "react";
import type { GeolocationContextType, GeolocationData } from "types/index";

// Create the context
const GeolocationContext = createContext<GeolocationContextType | undefined>(
	undefined,
);

// Provider component
export const GeolocationProvider = ({ children }: { children: ReactNode }) => {
	const [location, setLocation] = useState<GeolocationData>(null);
	const [error, setError] = useState<string | null>(null);

	// Function to fetch location
	const fetchLocation = () => {
		if (!navigator.geolocation) {
			setError("Geolocation is not supported by your browser.");
			return;
		}

		navigator.geolocation.getCurrentPosition(
			(position) => {
				const { latitude, longitude } = position.coords;
				setLocation({ latitude, longitude });
				setError(null); // Clear any previous errors
			},
			(err) => {
				setError(`Error: ${err.message}`);
			},
		);
	};

	// Automatically fetch location when the provider is mounted
	useEffect(() => {
		fetchLocation();
	});

	// Provide the data to child components
	return (
		<GeolocationContext.Provider value={{ location, error, fetchLocation }}>
			{children}
		</GeolocationContext.Provider>
	);
};
