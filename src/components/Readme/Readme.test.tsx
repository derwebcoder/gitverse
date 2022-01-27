import { render, screen } from "@testing-library/react";
import { Readme } from "./Readme";
import { readme } from "./Readme.mock";

describe("Component Readme", () => {
  it("renders the Markdown as HTML", () => {
    const { container } = render(
      <Readme markdown={window.atob(readme.content ?? "")} />
    );
    const headline = screen.getByText(/An example/);
    expect(headline).toBeTruthy();
    expect(headline.nodeName).toBe("H1");

    expect(screen.getByText(/Of the/)).toBeTruthy();
    const sentence = screen.getByText(/marvelous/);
    expect(sentence).toBeTruthy();
    expect(sentence.nodeName).toBe("EM");
    expect(screen.getByText(/Markdown/)).toBeTruthy();
  });
});
