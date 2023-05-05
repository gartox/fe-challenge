export type TPair = {
	id: string;
	label: string;
};

export interface THistoricData {
	"Meta Data": MetaData;
	"Time Series FX (Daily)": { [key: string]: TimeSeriesFXDaily };
}

export interface MetaData {
	"1. Information": string;
	"2. From Symbol": string;
	"3. To Symbol": string;
	"4. Output Size": string;
	"5. Last Refreshed": Date;
	"6. Time Zone": string;
}

export interface TimeSeriesFXDaily {
	"1. open": string;
	"2. high": string;
	"3. low": string;
	"4. close": string;
}

export type THistoricDataItem = {
	date: string;
	open: string;
	high: string;
	low: string;
	close: string;
};

export interface TParsedHistoricData {
	lastRefreshed: Date;
	historicItems: THistoricDataItem[];
}
