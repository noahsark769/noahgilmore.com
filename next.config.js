import { execSync } from "child_process";

const gitSha = process.env.NEXT_PUBLIC_GIT_SHA ||
  (() => { try { return execSync("git rev-parse HEAD").toString().trim(); } catch { return "unknown"; } })();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  bundlePagesRouterDependencies: true,
  env: {
    NEXT_PUBLIC_GIT_SHA: gitSha,
  },
}

export default nextConfig
