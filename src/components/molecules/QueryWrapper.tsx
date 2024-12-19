import { Typography } from "@mui/material";
import type { UseQueryResult } from "@tanstack/react-query";
import { LoadingIndicator } from "components/atoms/LoadingIndicator";

type QueryWrapperProps<T> = {
	query: UseQueryResult<T>;
	renderSuccess: (data: T) => JSX.Element;
};
export const QueryWrapper = <T,>({
	query,
	renderSuccess,
}: QueryWrapperProps<T>) => {
	if (query.isError) {
		return (
			<div
				style={{
					background: "rgba(255, 146, 146, 0.8)",
					borderRadius: 2,
					textAlign: "center",
				}}
			>
				<Typography>Wystąpił błąd w trakcie pobierania danych</Typography>
			</div>
		);
	}

	if (query.isLoading) {
		return <LoadingIndicator />;
	}
	if (query.isSuccess) {
		return renderSuccess(query.data);
	}
};
