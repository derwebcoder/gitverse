import { render, screen } from "@testing-library/react";
import { LoadingInfo } from "./LoadingInfo";

describe("Component LoadingInfo", () => {
  it("it renders the animation and info", () => {
    const { container } = render(<LoadingInfo text="A somewhat useful info" />);
    expect(screen.getByText(/A somewhat useful info/)).toBeInTheDocument();
    expect(container.querySelector(".lds-ring")).toBeTruthy();
  });
});
