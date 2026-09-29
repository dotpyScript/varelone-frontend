import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Unsplash already serves resized, format-negotiated images from its CDN,
    // so we hand sizing to it instead of re-optimising on our own server.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    qualities: [60, 75],
  },
};

export default nextConfig;
