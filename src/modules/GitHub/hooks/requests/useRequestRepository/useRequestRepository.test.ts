import { renderHook } from "@testing-library/react-hooks";
import { gitHubService } from "../../../services/GitHubService";
import { useFetchData } from "../../useFetchData/useFetchData";
import { params, repository } from "./useRequestRepository.mock";
import { request, useRequestRepository } from "./useRequestRepository";
jest.mock("../../../services/GitHubService");
jest.mock("../../useFetchData/useFetchData");

const mockedUseFetchData = useFetchData as unknown as jest.Mock<
  typeof useFetchData
>;

describe("Hook useRequestRepository", () => {
  beforeEach(() => {
    mockedUseFetchData.mockClear();
  });

  it("uses mockedUseFetchData", async () => {
    const _ = renderHook(() => useRequestRepository({}));
    expect(mockedUseFetchData).toHaveBeenCalledTimes(1);
  });

  it("calls octokit rest.repos.get", async () => {
    gitHubService.rest.repos.get = jest.fn(() => ({
      status: 200,
      data: repository,
    })) as any;
    const result = await request(params);
    expect(gitHubService.rest.repos.get).toHaveBeenCalledTimes(1);
    expect(gitHubService.rest.repos.get).toHaveBeenCalledWith({
      owner: params.owner,
      repo: params.name,
    });
    expect(result).toBe(repository);
  });

  it("throws exception for status codes >= 300", async () => {
    gitHubService.rest.repos.get = jest.fn(() => ({
      status: 420,
    })) as any;
    expect(request(params)).rejects.toThrow();
  });
});
