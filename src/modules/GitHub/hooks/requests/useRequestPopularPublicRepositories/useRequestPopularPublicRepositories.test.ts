import { renderHook } from "@testing-library/react-hooks";
import {
  request,
  useRequestPopularPublicRepositories,
} from "./useRequestPopularPublicRepositories";
import { gitHubService } from "../../../services/GitHubService";
import { useFetchData } from "../../useFetchData/useFetchData";
import { items } from "./useRequestPopularPublicRepositories.mock";
jest.mock("../../../services/GitHubService");
jest.mock("../../useFetchData/useFetchData");

const mockedUseFetchData = useFetchData as unknown as jest.Mock<
  typeof useFetchData
>;

describe("Hook useRequestPopularPublicRepositories", () => {
  beforeEach(() => {
    mockedUseFetchData.mockClear();
  });

  it("uses mockedUseFetchData", async () => {
    const _ = renderHook(() => useRequestPopularPublicRepositories());
    expect(mockedUseFetchData).toHaveBeenCalledTimes(1);
    expect(mockedUseFetchData).toHaveBeenCalledWith(request);
  });

  it("calls octokit rest.search.repos", async () => {
    gitHubService.rest.search.repos = jest.fn(() => ({
      status: 200,
      data: {
        items,
      },
    })) as any;
    const result = await request();
    expect(gitHubService.rest.search.repos).toHaveBeenCalledTimes(1);
    expect(result).toBe(items);
  });

  it("throws exception for status codes >= 300", async () => {
    gitHubService.rest.search.repos = jest.fn(() => ({
      status: 420,
    })) as any;
    expect(request()).rejects.toThrow();
  });
});
