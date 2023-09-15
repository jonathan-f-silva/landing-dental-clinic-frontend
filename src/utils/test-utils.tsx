/* eslint-disable react-refresh/only-export-components */
import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";
import { ConfigProvider } from "../contexts/ConfigProvider";
import AppThemeProvider from "../theme/AppThemeProvider";

afterEach(() => {
  cleanup();
});

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider>
      <AppThemeProvider>{children}</AppThemeProvider>
    </ConfigProvider>
  );
};

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
