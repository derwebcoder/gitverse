import { useCallback } from "react";
import { Repository } from "../../../models/Repository";
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
  const repositoryResponse = await gitHubService.rest.repos.get({
    owner,
    repo: name,
  });
  if (repositoryResponse.status >= 300) {
    // TODO: Bessere Fehlermeldungen
    throw new Error("Generischer Fehler");
  }
  return repositoryResponse.data;
};

/**
 * Fetch the meta data of a given repository
 *
 * @param param0 An object with the repository owner login and the repository name
 * @returns the repository
 */
export const useRequestRepository = ({ owner, name }: Params) => {
  const requestData = useCallback(() => {
    return request({ owner, name });
  }, [owner, name]);

  return useFetchData<Repository>(requestData);
};
