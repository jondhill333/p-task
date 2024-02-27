import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
  cleanup();
});

// function customRender(ui: React.ReactElement, options = {}) {
//   return render(ui, {
//     wrapper: ({ children }) => children,
//     ...options,
//   });
// }

// // eslint-disable-next-line react-refresh/only-export-components
// export * from "@testing-library/react";
// export { default as userEvent } from "@testing-library/react";

// export { customRender as render };
