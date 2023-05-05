import {
	THistoricData,
	THistoricDataItem,
	TParsedHistoricData,
	TimeSeriesFXDaily,
} from "@/types";

export const getPairHistoricData = async (pair: string) => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_API_REST}historic-data/${pair}`
		);

		if (res.ok !== true) {
			throw Error(await res.json());
		}

		const data: THistoricData = await res.json();

		const init = [] as Array<THistoricDataItem>;

		const dataItemList = Object.keys(data["Time Series FX (Daily)"]).reduce(
			(list, item) => {
				const dataItem = data["Time Series FX (Daily)"][item];

				return [
					...list,
					{
						date: item,
						open: dataItem["1. open"],
						high: dataItem["2. high"],
						low: dataItem["3. low"],
						close: dataItem["4. close"],
					},
				];
			},
			init
		);

		const parsedHistoricData: TParsedHistoricData = {
			lastRefreshed: data["Meta Data"]["5. Last Refreshed"],
			historicItems: dataItemList,
		};

		return parsedHistoricData;
	} catch (error) {
		return {
			lastRefreshed: new Date(Date.now()),
			historicItems: [],
		};
	}
};
