/**
 * Subset of the GitHub Repository model
 */
export interface Repository {
  name: string;
  owner: {
    login: string;
  } | null;
  html_url: string;
  description: string | null;
  created_at: string;
  pushed_at: string;
  stargazers_count: number;
  license: {
    name: string;
  } | null;
}
