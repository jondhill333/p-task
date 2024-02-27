import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import AddProperties from "./AddPropererty";

describe("View properties basic render", () => {
  it("should render the component", () => {
    render(<AddProperties />);
    // screen.debug();
  });
});
