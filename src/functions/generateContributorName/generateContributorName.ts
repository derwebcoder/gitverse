import { Contributor } from "../../modules/GitHub/models/Contributor";

/**
 * Generates the name of a contributor.
 * The name will be one of the followings in the given order
 * 1. the given name
 * 2. the username
 * 3. "Unknown"
 *
 * @param contributor A contributor metadata provided by GitHub
 * @returns The favorised name
 */
export const generateContributorName = (contributor: Contributor | null) => {
  return contributor?.name ?? contributor?.login ?? "Unknown";
};
