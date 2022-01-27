import { useCallback } from "react";
import { Contributor } from "../../../models/Contributor";
import { gitHubService } from "../../../services/GitHubService";
import { useFetchData } from "../../useFetchData/useFetchData";

type Params = {
  /** username */
  owner?: string;
  /** repository name */
  name?: string;
};
export const request = async ({ owner, name }: Params) => {
  if (!owner || !name) {
    // TODO: Bessere Fehlermeldungen
    throw new Error("Es fehlen Informationen");
  }
  const contributorsResponse = await gitHubService.rest.repos.listContributors({
    owner,
    repo: name,
  });
  if (contributorsResponse.status >= 300) {
    // TODO: Bessere Fehlermeldungen
    throw new Error("Generischer Fehler");
  }
  return contributorsResponse.data;
};

/**
 * Fetch the contributors of a given repository
 *
 * @param param0 An object with the repository owner login and the repository name
 * @returns a list of contributors
 */
export const useRequestRepositoryContributors = ({ owner, name }: Params) => {
  const requestData = useCallback(() => {
    return request({ owner, name });
  }, [owner, name]);

  return useFetchData<Contributor[]>(requestData);
};
