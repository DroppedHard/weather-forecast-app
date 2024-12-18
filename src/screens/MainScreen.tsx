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
			<PositionedCard top={15} right={15} width={500}>
				<QueryWrapper
					query={forecast}
					renderSuccess={(data) => <ForecastTable data={data} />}
				/>
			</PositionedCard>
			<PositionedCard bottom={15} left={15} width={500}>
				<QueryWrapper
					query={summary}
					renderSuccess={(data) => <SummaryFooter data={data} />}
				/>
			</PositionedCard>
		</>
	);
};
