import { ContextInstance } from "@/context";
import { TRealTimePairsDataObj } from "@/types/context";
import { getFormatedDateFull } from "@/utils/getFormatedDateFull";
import { useContext, useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";

export const useGetPairRealTimePrice = (pair: string) => {
	const [currentPair, setCurrentPair] = useState(pair);
	const [isSuscribed, setIsSuscribed] = useState(false);
	const {
		state: { realTimePairsData },
		actions: { updateRealTimePairsPrices },
	} = useContext(ContextInstance);

	const rtObjIsEmpty = Object.keys(realTimePairsData).length === 0;

	const { sendJsonMessage, lastMessage, lastJsonMessage } = useWebSocket<{
		currency: string;
		detail: string;
		message: string;
		point: number;
	}>(process.env.NEXT_PUBLIC_SOCKET_URL as string, {
		onOpen: () => console.log("opened"),
		//Will attempt to reconnect on all close events, such as server shutting down
		shouldReconnect: (closeEvent) => true,
	});

	useEffect(() => {
		if (lastJsonMessage !== null && Object.keys(lastJsonMessage).length !== 0) {
			if (currentPair === lastJsonMessage.currency) {
				const newData = {
					...realTimePairsData,
					[currentPair]: {
						lastUpdate: getFormatedDateFull(),
						lastPrice: lastJsonMessage.point,
						prices:
							realTimePairsData[currentPair] !== undefined
								? [
										...realTimePairsData[currentPair].prices,
										lastJsonMessage.point,
								  ]
								: [lastJsonMessage.point],
					},
				};

				updateRealTimePairsPrices(newData);
			}
		}

		const suscribe = (pair: string) => {
			sendJsonMessage({ action: "subscribe", pair });
		};

		const unsuscribe = (pair: string) => {
			sendJsonMessage({ action: "unsubscribe", pair });
		};

		if (isSuscribed === false) {
			suscribe(currentPair);
			setIsSuscribed(true);
		}
		if (currentPair !== pair) {
			unsuscribe(currentPair);
			setCurrentPair(pair);
			setIsSuscribed(false);
		}
	}, [lastJsonMessage, lastMessage, pair, currentPair, isSuscribed]);

	if (rtObjIsEmpty) {
		return {
			lastUpdate: "",
			high: 0,
			low: 0,
			lastPrice: 0,
		};
	}

	const pairUnregistered = realTimePairsData[currentPair] === undefined;

	return {
		lastUpdate: pairUnregistered
			? ""
			: realTimePairsData[currentPair].lastUpdate,
		low: pairUnregistered
			? 0
			: Math.min(...realTimePairsData[currentPair].prices),
		high: pairUnregistered
			? 0
			: Math.max(...realTimePairsData[currentPair].prices),
		lastPrice: pairUnregistered ? 0 : realTimePairsData[currentPair].lastPrice,
	};
};
