import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import ViewProperties from "./ViewProperties";

describe("View properties basic render", () => {
  it("should render the component", () => {
    render(<ViewProperties />);
  });
});
