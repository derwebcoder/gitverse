import { useCallback } from "react";
import { Readme } from "../../../models/Readme";
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
  const readmeResponse = await gitHubService.rest.repos.getReadme({
    owner,
    repo: name,
  });
  if (readmeResponse.status >= 300) {
    // TODO: Bessere Fehlermeldungen
    throw new Error("Generischer Fehler");
  }
  return readmeResponse.data;
};

/**
 * Fetch the Readme content of a given repository
 *
 * @param param0 An object with the repository owner login and the repository name
 * @returns an object containing the readme content
 */
export const useRequestRepositoryReadme = ({ owner, name }: Params) => {
  const requestData = useCallback(() => {
    return request({ owner, name });
  }, [owner, name]);

  return useFetchData<Readme>(requestData);
};
