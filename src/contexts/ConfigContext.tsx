import { Dispatch, createContext, useReducer } from "react";
import { Action, Config, configReducer, initialConfig } from "./configReducer";

export const ConfigContext = createContext<Config>(initialConfig);
export const ConfigDispatchContext = createContext<Dispatch<Action>>(() => {});

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, dispatch] = useReducer(configReducer, initialConfig);

  return (
    <ConfigContext.Provider value={config}>
      <ConfigDispatchContext.Provider value={dispatch}>
        {children}
      </ConfigDispatchContext.Provider>
    </ConfigContext.Provider>
  );
}
