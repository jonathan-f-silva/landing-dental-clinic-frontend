import { Dispatch, createContext } from "react";
import { Action, Config, initialConfig } from "./configReducer";

export const ConfigContext = createContext<Config>(initialConfig);

export const ConfigDispatchContext = createContext<Dispatch<Action>>(() => {});
