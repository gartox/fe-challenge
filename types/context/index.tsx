import { TPair } from ".."


export type TRealTimePairData = {
  lastUpdate: string;
  prices: number[];
  lastPrice: number;
};

export type TRealTimePairsDataObj = { [pair: string]: TRealTimePairData };


export type TStore = {
  pairs: TPair[]
  realTimePairsData: TRealTimePairsDataObj
}

export type TActionObject = {
  [key: string]: TStore;
};



export type ActionInterface =
  | {
    type: 'SET_PAIRS';
    payload: TPair[];
  }
  | {
    type: "UPDATE_REALTIME_PAIRS_PRICES",
    payload: TRealTimePairsDataObj
  }