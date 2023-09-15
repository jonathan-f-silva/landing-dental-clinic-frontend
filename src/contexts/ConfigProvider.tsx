import { useReducer } from "react";
import { configReducer, emptyConfig } from "./configReducer";
import { ConfigContext, ConfigDispatchContext } from "./ConfigContext";

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, dispatch] = useReducer(configReducer, emptyConfig);

  return (
    <ConfigContext.Provider value={config}>
      <ConfigDispatchContext.Provider value={dispatch}>
        {children}
      </ConfigDispatchContext.Provider>
    </ConfigContext.Provider>
  );
}
