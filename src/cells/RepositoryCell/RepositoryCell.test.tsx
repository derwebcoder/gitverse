import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Loading, Empty, Failed, Success, NotTried } from "./RepositoryCell";
import { repository } from "./RepositoryCell.mock";

describe("RepositoryCell", () => {
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
    const { container } = render(<Success repository={repository} />, {
      wrapper: MemoryRouter,
    });
    expect(container.querySelector(".RepositoryCard")).toBeTruthy();
    expect(screen.getByText(/Talking Duck/)).toBeInTheDocument();
  });
});
