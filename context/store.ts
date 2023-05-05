import { TStore, TActionObject, ActionInterface } from "@/types/context";

export const ActionObject = (
	state: TStore,
	action: ActionInterface
): TActionObject => {
	const { payload } = action as any;

	return {
		SET_PAIRS: {
			...state,
			pairs: payload,
		},
		UPDATE_REALTIME_PAIRS_PRICES: {
			...state,
			realTimePairsData: payload,
		},
	};
};
