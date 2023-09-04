/* eslint-disable react-refresh/only-export-components */
import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { ConfigProvider } from "../contexts/ConfigProvider";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import appRoutes from "../routes";

afterEach(() => {
  cleanup();
});

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </ConfigProvider>
  );
};

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });
}

/**
 * Render isolated element with router
 * @param initialEntries (optional) Initial entries for router (default: ["/"])
 * @param routes (optional) Routes for router (default: appRoutes)
 * @returns Rendered element with router
 */
function renderWithRouter(
  initialEntries = ["/"],
  routes: RouteObject[] = appRoutes,
) {
  return render(
    <AllTheProviders>
      <RouterProvider router={createMemoryRouter(routes, { initialEntries })} />
    </AllTheProviders>,
  );
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render, renderWithRouter };
