import { VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <VStack direction="column" alignItems="center" spacing={4}>
      <Outlet />
    </VStack>
  );
}

export default App;
