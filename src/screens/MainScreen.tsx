import { ThemeToggleButton } from "components/atoms";
import { PositionedCard } from "components/molecules";
import { QueryWrapper } from "components/molecules/QueryWrapper";
import { BackgroundMap, ForecastTable } from "components/organisms";
import { SummaryFooter } from "components/organisms/SummaryFooter";
import { useGeolocation } from "components/organisms/hooks";
import type { GeolocationData } from "types/types";

export const MainScreen = () => {
	const { initialGeolocation, setSelectedGeolocation, forecast, summary } =
		useGeolocation();

	return (
		<>
			<BackgroundMap
				initialGeolocation={initialGeolocation}
				setGeolocation={(newGeolocation: GeolocationData) =>
					setSelectedGeolocation(newGeolocation)
				}
			/>
			<PositionedCard placement="top-right">
				<QueryWrapper
					query={forecast}
					renderSuccess={(data) => <ForecastTable data={data} />}
				/>
			</PositionedCard>
			<PositionedCard placement="bottom">
				<QueryWrapper
					query={summary}
					renderSuccess={(data) => <SummaryFooter data={data} />}
				/>
			</PositionedCard>
			<ThemeToggleButton />
		</>
	);
};
