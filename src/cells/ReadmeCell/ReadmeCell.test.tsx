import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Loading, Empty, Failed, Success, NotTried } from "./ReadmeCell";
import { readme } from "./ReadmeCell.mock";

describe("RepositoriesCell", () => {
  it("renders NotTried successfully", () => {
    const { container } = render(<NotTried />);
    expect(container.querySelector(".LoadingInfo")).toBeTruthy();
  });

  it("renders Loading successfully", () => {
    const { container } = render(<Loading />);
    expect(container.querySelector(".LoadingInfo")).toBeTruthy();
  });

  it("renders Empty successfully", async () => {
    expect(() => {
      render(<Empty />);
    }).not.toThrow();
  });

  it("renders Failure successfully", async () => {
    const { container } = render(<Failed />);
    expect(container.querySelector(".ErrorInfo")).toBeTruthy();
  });

  it("renders Success successfully", async () => {
    const { container } = render(<Success readme={readme} />, {
      wrapper: MemoryRouter,
    });
    expect(container.querySelector(".Readme")).toBeTruthy();
    expect(screen.getByText(/bold/)).toBeInTheDocument();
  });
});
