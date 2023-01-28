import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: "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",
});

export const getPublicGists = () => octokit.gists.listPublic();

export const getGistForUser = (username) =>
  octokit.gists.listForUser({ username });
