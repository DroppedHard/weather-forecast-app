import type { UseQueryResult } from "@tanstack/react-query";
import { PersonalizedAlert } from "components/atoms";
import { LoadingIndicator } from "components/atoms/LoadingIndicator";
import { useOverlay } from "components/organisms/context";
import { AlertSeverity } from "types/types";

type QueryWrapperProps<T> = {
	query: UseQueryResult<T>;
	renderSuccess: (data: T) => JSX.Element;
};
export const QueryWrapper = <T,>({
	query,
	renderSuccess,
}: QueryWrapperProps<T>) => {
	const { showAlert } = useOverlay();
	if (query.isLoading) {
		return <LoadingIndicator />;
	}
	if (query.isError) {
		showAlert(
			<PersonalizedAlert
				message={`Error: ${query.error.message}`}
				severity={AlertSeverity.error}
			/>,
		);
	}
	if (query.isSuccess) {
		return renderSuccess(query.data);
	}
};
