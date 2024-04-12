/** @type {import('next').NextConfig} */
const nextConfig = {};

// export default nextConfig;

export default {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "raw.githubusercontent.com",
          port: "",
          pathname: "/**",
        },
      ],
    },
  };