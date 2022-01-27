import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { RepositoryCard } from "./RepositoryCard";
import { repository } from "./RepositoryCard.mock";

describe("Component RepositoryCard", () => {
  it("renders repository without position", () => {
    const { container } = render(<RepositoryCard {...repository} />, {
      wrapper: MemoryRouter,
    });
    expect(container.querySelector(".position")).not.toBeTruthy();
    expect(screen.getByText(/Talking Duck/)).toBeInTheDocument();
    expect(screen.getByText(/quack/)).toBeInTheDocument();
    expect(
      screen.getByText(/A duck talking about the meaning of life/)
    ).toBeInTheDocument();
    const stars = screen.getByText(/253k/);
    expect(stars).toBeInTheDocument();
    expect(stars.getAttribute("aria-label")).toBe("Stars");
    const license = screen.getByText(/MIT License/);
    expect(license).toBeInTheDocument();
    expect(license.getAttribute("aria-label")).toBe("License");
  });

  it("renders repository with position", () => {
    render(<RepositoryCard {...repository} position={2} />, {
      wrapper: MemoryRouter,
    });
    const position = screen.getByText(/#2/);
    expect(position).toBeInTheDocument();
    expect(screen.getByText(/Talking Duck/)).toBeInTheDocument();
    expect(screen.getByText(/quack/)).toBeInTheDocument();
    expect(
      screen.getByText(/A duck talking about the meaning of life/)
    ).toBeInTheDocument();
    const stars = screen.getByText(/253k/);
    expect(stars).toBeInTheDocument();
    expect(stars.getAttribute("aria-label")).toBe("Stars");
    const license = screen.getByText(/MIT License/);
    expect(license).toBeInTheDocument();
    expect(license.getAttribute("aria-label")).toBe("License");
  });
});
