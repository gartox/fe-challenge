import { TPair } from "@/types";
import { TRealTimePairsDataObj, TStore } from "@/types/context";
import { createContext, useReducer } from "react";
import { initialState } from "./initialState";
import { Reducer } from "./reducer";




type TAactions = {
  setPairs: (pairs: TPair[]) => void;
  updateRealTimePairsPrices: (realTimePairsData: TRealTimePairsDataObj) => void
}

type ContextT = {
  state: TStore;
  actions: TAactions;
};

const ContextInstance = createContext({} as ContextT);

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(Reducer, initialState);


  const actions: TAactions = {
    setPairs: (payload) => {
      dispatch({ type: "SET_PAIRS", payload })
    },

    updateRealTimePairsPrices: (payload) => {
      dispatch({ type: "UPDATE_REALTIME_PAIRS_PRICES", payload })
    }
  }

  return (
    <ContextInstance.Provider value={{ state, actions }}>
      {children}
    </ContextInstance.Provider>
  )
}

export { ContextProvider, ContextInstance }