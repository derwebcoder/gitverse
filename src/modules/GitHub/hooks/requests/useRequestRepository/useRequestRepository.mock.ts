import { Repository } from "../../../models/Repository";

export const params = { owner: "owner", name: "repository name" };

export const repository: Repository = {
  name: "Talking Duck",
  owner: {
    login: "quack",
  },
  description: "A duck talking about the meaning of life",
  created_at: "2012-01-01T00:31:50Z",
  pushed_at: "2012-01-01T00:37:02Z",
  html_url: "https://github.com/dtrupenn/Tetris",
  stargazers_count: 253487,
  license: {
    name: "MIT License",
  },
};
