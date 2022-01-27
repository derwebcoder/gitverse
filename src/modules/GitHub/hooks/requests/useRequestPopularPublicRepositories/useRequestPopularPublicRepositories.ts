import { Repository } from "../../../models/Repository";
import { gitHubService } from "../../../services/GitHubService";
import { useFetchData } from "../../useFetchData/useFetchData";

export const request = async () => {
  const reposResponse = await gitHubService.rest.search.repos({
    q: "stars:>1",
    sort: "stars",
  });
  if (reposResponse.status >= 300) {
    // TODO: Bessere Fehlermeldungen
    throw new Error("Generischer Fehler");
  }
  return reposResponse.data.items;
};

/**
 * Fetch a list of popular GitHub repositories based in stars ranking
 *
 * @returns A list of repositories
 */
export const useRequestPopularPublicRepositories = () => {
  return useFetchData<Repository[]>(request);
};
