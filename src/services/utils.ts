export const formatDate = (unformattedDate: string) => {
	const date = new Date(unformattedDate);
	return new Intl.DateTimeFormat("en-GB", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	}).format(date);
};
