import { ActionInterface, TStore } from "@/types/context";
import { ActionObject } from "./store";





export const Reducer = (state: TStore, action: ActionInterface) => {
  if (ActionObject(state, action)[action.type]) {
      return ActionObject(state, action)[action.type];
  }
  /* eslint-disable no-console */
  console.log(`La accion "${action.type}" no existe.`);
  return state;
};