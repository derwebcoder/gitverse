import { generateContributorName } from "./generateContributorName";

describe("Function generateContributorName", () => {
  it("favors name over login", () => {
    expect(generateContributorName({ name: "name", login: "login" })).toBe(
      "name"
    );
  });

  it("uses login if there is no name", () => {
    expect(generateContributorName({ login: "login" })).toBe("login");
  });

  it("uses returns 'Unknown' if no name or login is provided", () => {
    expect(generateContributorName({})).toBe("Unknown");
  });
});
