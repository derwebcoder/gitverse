import { renderHook } from "@testing-library/react-hooks";
import { gitHubService } from "../../../services/GitHubService";
import { useFetchData } from "../../useFetchData/useFetchData";
import { params, readme } from "./useRequestRepositoryReadme.mock";
import {
  request,
  useRequestRepositoryReadme,
} from "./useRequestRepositoryReadme";
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
    const _ = renderHook(() => useRequestRepositoryReadme({}));
    expect(mockedUseFetchData).toHaveBeenCalledTimes(1);
  });

  it("calls octokit rest.repos.getReadme", async () => {
    gitHubService.rest.repos.getReadme = jest.fn(() => ({
      status: 200,
      data: readme,
    })) as any;
    const result = await request(params);
    expect(gitHubService.rest.repos.getReadme).toHaveBeenCalledTimes(1);
    expect(gitHubService.rest.repos.getReadme).toHaveBeenCalledWith({
      owner: params.owner,
      repo: params.name,
    });
    expect(result).toBe(readme);
  });

  it("throws exception for status codes >= 300", async () => {
    gitHubService.rest.repos.getReadme = jest.fn(() => ({
      status: 420,
    })) as any;
    expect(request(params)).rejects.toThrow();
  });
});
