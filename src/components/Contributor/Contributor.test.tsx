import { render, screen } from "@testing-library/react";
import { Contributor } from "./Contributor";

describe("Component Contributor", () => {
  it("renders name and contributions", () => {
    const _ = render(
      <Contributor name="Name Name" login="userA" contributions={12} />
    );
    expect(screen.getByText(/Name Name/)).toBeInTheDocument();
    expect(screen.getByText(/12/)).toBeInTheDocument();
  });

  it("renders login and contributions", () => {
    const _ = render(<Contributor login="userA" contributions={34} />);
    expect(screen.getByText(/userA/)).toBeInTheDocument();
    expect(screen.getByText(/34/)).toBeInTheDocument();
  });
});
