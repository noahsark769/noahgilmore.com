import { execSync } from "child_process";
import type { NextConfig } from "next";

const gitSha = process.env.NEXT_PUBLIC_GIT_SHA ||
  (() => { try { return execSync("git rev-parse HEAD").toString().trim(); } catch { return "unknown"; } })();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  bundlePagesRouterDependencies: true,
  env: {
    NEXT_PUBLIC_GIT_SHA: gitSha,
  },
}

export default nextConfig
