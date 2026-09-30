import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { env } from "node:process";

const repositoryName = env.GITHUB_REPOSITORY?.split("/")[1];
const isGitHubUserPage = repositoryName?.endsWith(".github.io");
const base =
  env.GITHUB_ACTIONS && repositoryName && !isGitHubUserPage
    ? `/${repositoryName}/`
    : "/";

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
});
