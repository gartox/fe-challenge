import { TRealTimePairsDataObj, TStore } from "@/types/context";

export const initialState: TStore = {
	pairs: [],
	realTimePairsData: {} as TRealTimePairsDataObj,
};
