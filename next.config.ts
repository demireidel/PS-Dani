import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "static.wixstatic.com" },
      { protocol: "https", hostname: "resizer.glanacion.com" },
      { protocol: "https", hostname: "blogger.googleusercontent.com" },
      { protocol: "https", hostname: "ociopatas.com" },
      { protocol: "https", hostname: "elanartista.com.ar" },
      { protocol: "https", hostname: "www.cine.com" },
    ],
  },
};

export default nextConfig;
