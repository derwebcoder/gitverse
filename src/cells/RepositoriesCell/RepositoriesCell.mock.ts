import { Repository } from "../../modules/GitHub/models/Repository";

export const repositories: Repository[] = [
  {
    name: "Talking Duck",
    owner: {
      login: "quack",
    },
    description: "A duck talking about the meaning of life",
    created_at: "2012-01-01T00:31:50Z",
    pushed_at: "2012-01-01T00:37:02Z",
    html_url: "https://github.com/dtrupenn/Tetris",
    stargazers_count: 25,
    license: {
      name: "MIT License",
    },
  },
  {
    name: "Gitpaper",
    owner: {
      login: "catted",
    },
    description: null,
    created_at: "2015-02-11T00:31:50Z",
    pushed_at: "2017-03-03T016:37:02Z",
    html_url: "https://github.com/dtrupenn/Tetris",
    stargazers_count: 65,
    license: {
      name: "MIT License",
    },
  },
];
