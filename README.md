# Gitverse

A showcase demonstration - shows the most popular GitHub Repositories (ranked by stars).

## How to run

1. Install dependencies
2. `npm run start`

Without authentification the GitHub API rate limit is something between 10 and 30 requests per minute.
You can increase the limit by creating a `.env` file with [your GitHub access token](https://github.com/settings/tokens):

```
REACT_APP_TOKEN=<YOUR_TOKEN>
```
