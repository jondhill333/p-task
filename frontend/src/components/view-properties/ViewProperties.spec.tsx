import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import ViewProperties from "./ViewPropererties";

describe("View properties basic render", () => {
  it("should render the component", () => {
    render(<ViewProperties />);
    // screen.debug();
  });
});
