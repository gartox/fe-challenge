import { TParsedHistoricData } from "@/types";
import { getPairHistoricData } from "@/utils/getPairHistoricData";
import { useEffect, useState } from "react";

export const useGetPairHistoricData = (pair: string) => {
	const [pairHistoricData, setPairHistoricData] = useState<TParsedHistoricData>(
		{
			lastRefreshed: new Date(Date.now()),
			historicItems: [],
		}
	);

	useEffect(() => {
		getPairHistoricData(pair).then((data) => {
			setPairHistoricData(data);
		});
	}, [pair]);

	return pairHistoricData;
};
