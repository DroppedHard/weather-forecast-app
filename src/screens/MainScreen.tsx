import { PositionedCard } from "components/molecules";
import { QueryWrapper } from "components/molecules/QueryWrapper";
import { BackgroundMap, ForecastTable } from "components/organisms";
import { useGeolocation } from "components/organisms/hooks";
import { useGetWeeklyForecast } from "components/organisms/hooks/UseForecast";
import { useEffect, useState } from "react";
import type { GeolocationData } from "types/types";

export const MainScreen = () => {
	const { geolocation, selectedGeolocation, setSelectedGeolocation } =
		useGeolocation();

	const [currentGeolocation, setCurrentGeolocation] = useState<
		GeolocationData | undefined
	>(geolocation);
	useEffect(() => {
		if (selectedGeolocation) {
			setCurrentGeolocation(selectedGeolocation);
		} else if (geolocation) {
			setCurrentGeolocation(geolocation);
		}
	}, [geolocation, selectedGeolocation]);
	const forecast = useGetWeeklyForecast(currentGeolocation as GeolocationData);

	return (
		<>
			<BackgroundMap
				initialGeolocation={geolocation}
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
		</>
	);
};
