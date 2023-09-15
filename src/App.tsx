import { VStack } from "@chakra-ui/react";
import { Outlet, useLoaderData } from "react-router-dom";
import { Config, getConfig } from "./contexts/configReducer";
import { useConfigDispatch } from "./contexts/ConfigContext";
import { useEffect } from "react";

export async function loader() {
  return getConfig();
}

function App() {
  const config = useLoaderData() as Config;
  const dispatch = useConfigDispatch();

  useEffect(() => {
    dispatch({ type: "setConfig", payload: config });
  }, [config, dispatch]);

  return (
    <VStack direction="column" alignItems="center" spacing={4}>
      <Outlet />
    </VStack>
  );
}

export default App;
