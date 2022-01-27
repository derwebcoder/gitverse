import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Loading, Empty, Failed, Success, NotTried } from "./RepositoriesCell";
import { repositories } from "./RepositoriesCell.mock";

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
    const { container } = render(<Success repos={repositories} />, {
      wrapper: MemoryRouter,
    });
    expect(container.querySelectorAll(".RepositoryCard").length).toBe(2);
    expect(screen.getByText(/Talking Duck/)).toBeInTheDocument();
    expect(screen.getByText(/Gitpaper/)).toBeInTheDocument();
  });
});
