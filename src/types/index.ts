export * from "./types";

export type GeolocationData = {
	latitude: number;
	longitude: number;
} | null;

export type GeolocationContextType = {
	location: GeolocationData;
	error: string | null;
	fetchLocation: () => void; // Optionally trigger location fetch manually
};
