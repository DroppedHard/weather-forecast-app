export const formatDate = (unformattedDate: string) => {
	const date = new Date(unformattedDate);
	return new Intl.DateTimeFormat("en-GB", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	}).format(date);
};

export const headerTextMapping = {
	time: "Dzień",
	weather_code: "Pogoda",
	temperature_2m_max: "Max temp",
	temperature_2m_min: "Min temp",
	estimated_energy_generated: "szac. energia",
};
