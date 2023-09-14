import { Dispatch, createContext, useContext } from "react";
import { Config, ConfigAction, emptyConfig } from "./configReducer";

export const ConfigContext = createContext<Config>(emptyConfig);

export const ConfigDispatchContext = createContext<Dispatch<ConfigAction>>(
  () => {},
);

export const useConfig = () => useContext(ConfigContext);

export const useConfigDispatch = () => useContext(ConfigDispatchContext);
