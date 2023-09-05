import { Dispatch, createContext, useContext } from "react";
import { Config, ConfigAction, initialConfig } from "./configReducer";

export const ConfigContext = createContext<Config>(initialConfig);

export const ConfigDispatchContext = createContext<Dispatch<ConfigAction>>(
  () => {},
);

export const useConfig = () => useContext(ConfigContext);

export const useConfigDispatch = () => useContext(ConfigDispatchContext);
