import { Dispatch, createContext, useContext } from "react";
import { Action, Config, initialConfig } from "./configReducer";

export const ConfigContext = createContext<Config>(initialConfig);

export const ConfigDispatchContext = createContext<Dispatch<Action>>(() => {});

export const useConfig = () => useContext(ConfigContext);

export const useConfigDispatch = () => useContext(ConfigDispatchContext);
