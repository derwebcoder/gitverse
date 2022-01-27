import { Octokit } from "octokit";

export const gitHubService = new Octokit({ auth: process.env.REACT_APP_TOKEN });
