import { Contributor } from "../../../models/Contributor";
import { Readme } from "../../../models/Readme";

export const params = { owner: "owner", name: "repository name" };

export const contributors: Contributor[] = [
  {
    contributions: 3456,
    name: "Jenny",
  },
  {
    contributions: 2093,
    name: "Fibi",
    login: "fibs12",
  },
  {
    contributions: 12,
    login: "january",
  },
];
