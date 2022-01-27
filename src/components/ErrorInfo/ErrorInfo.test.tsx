import { render, screen } from "@testing-library/react";
import { ErrorInfo } from "./ErrorInfo";

describe("Component ErrorInfo", () => {
  it("it renders error message", () => {
    render(<ErrorInfo text="A helpful error message." />);
    expect(screen.getByText(/A helpful error message/)).toBeInTheDocument();
  });
});
