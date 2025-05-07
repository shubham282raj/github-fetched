import { Octokit } from "@octokit/core";

const token = import.meta.env.VITE_GITHUB_TOKEN;
const owner = import.meta.env.VITE_REPO_OWNER;
const repo = import.meta.env.VITE_REPO_NAME;

const octokit = new Octokit({
  auth: token,
});

export const getBlogHeaders = async (path) => {
  const res = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}",
    {
      owner: owner,
      repo: repo,
      path: path,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  return res;
};

export const fetchTextFile = async (path, title) => {
  const res = await fetch(
    `https://raw.githubusercontent.com/${owner}/${repo}/main/${path}/${title}`
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch file: ${res.status} ${res.statusText}`);
  }

  const text = await res.text();
  return text;
};
