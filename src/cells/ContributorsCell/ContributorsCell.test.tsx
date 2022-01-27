import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Loading, Empty, Failed, Success, NotTried } from "./ContributorsCell";
import { contributors } from "./ContributorsCell.mock";

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
    const { container } = render(<Success contributors={contributors} />, {
      wrapper: MemoryRouter,
    });
    expect(container.querySelectorAll(".Contributor").length).toBe(3);
    expect(screen.getByText(/Jenny/)).toBeInTheDocument();
    expect(screen.getByText(/Fibi/)).toBeInTheDocument();
    expect(screen.getByText(/january/)).toBeInTheDocument();
  });
});
