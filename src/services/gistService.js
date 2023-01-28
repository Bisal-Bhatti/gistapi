import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: "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",
});

export const getPublicGists = () => octokit.gists.listPublic();

export const getGistForUser = (username) =>
  octokit.gists.listForUser({ username });
