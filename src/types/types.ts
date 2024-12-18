export type GeolocationData = {
	latitude: number;
	longitude: number;
} | null;

export type GeolocationContextDispatch = {
	location: GeolocationData;
	setLocation: (location: GeolocationData) => void;
};

export enum AlertSeverity {
	info = "info",
	success = "success",
	error = "error",
	warning = "warning",
}

export type PersonalizedAlertProps = {
	message: string;
	severity: AlertSeverity;
};
