import type { NextConfig } from "next";

const backendUrl = (process.env.BACKEND_URL?.trim() || "http://127.0.0.1:8100").replace(
  /\/$/,
  "",
);

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/backend-api/:path*",
        destination: `${backendUrl}/:path*`,
      },
    ];
  },
};

export default nextConfig;
