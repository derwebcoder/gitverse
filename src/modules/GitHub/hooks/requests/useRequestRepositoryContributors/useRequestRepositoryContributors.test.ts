import { renderHook } from "@testing-library/react-hooks";
import { gitHubService } from "../../../services/GitHubService";
import { useFetchData } from "../../useFetchData/useFetchData";
import { params, contributors } from "./useRequestRepositoryContributors.mock";
import {
  request,
  useRequestRepositoryContributors,
} from "./useRequestRepositoryContributors";
jest.mock("../../../services/GitHubService");
jest.mock("../../useFetchData/useFetchData");

const mockedUseFetchData = useFetchData as unknown as jest.Mock<
  typeof useFetchData
>;

describe("Hook useRequestRepositoryReadme", () => {
  beforeEach(() => {
    mockedUseFetchData.mockClear();
  });

  it("uses mockedUseFetchData", async () => {
    const _ = renderHook(() => useRequestRepositoryContributors({}));
    expect(mockedUseFetchData).toHaveBeenCalledTimes(1);
  });

  it("calls octokit rest.repos.listContributors", async () => {
    gitHubService.rest.repos.listContributors = jest.fn(() => ({
      status: 200,
      data: contributors,
    })) as any;
    const result = await request(params);
    expect(gitHubService.rest.repos.listContributors).toHaveBeenCalledTimes(1);
    expect(gitHubService.rest.repos.listContributors).toHaveBeenCalledWith({
      owner: params.owner,
      repo: params.name,
    });
    expect(result).toBe(contributors);
  });

  it("throws exception for status codes >= 300", async () => {
    gitHubService.rest.repos.listContributors = jest.fn(() => ({
      status: 420,
    })) as any;
    expect(request(params)).rejects.toThrow();
  });
});
