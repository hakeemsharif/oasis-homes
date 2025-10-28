import type { NextConfig } from "next";

const nextConfig: NextConfig = {

      images: {
        remotePatterns: [
          {
            protocol: "http",
            hostname: "localhost",
            port: "",
          },
          {
            protocol: "http",
            hostname: "oasis-homes.local",
            port: "",
          },
          {
            protocol: "https",
            hostname: "forestgreen-quetzal-460038.hostingersite.com",
            port: "",
          },
          {
            protocol: "https",
            hostname: "detailed-point.localsite.io",
            port: "",
          },
          {
            protocol: "https",
            hostname: "res.cloudinary.com",
            port: "",
          },

        ],
      },

};

export default nextConfig;
