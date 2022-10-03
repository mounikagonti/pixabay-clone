/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["upload.wikimedia.org", "cdn.pixabay.com", "pixabay.com"],
  },
  env: {
    PIXABAY_API_KEY: "30149029-49a88e41e530c719daf109a78",
  },
};

module.exports = nextConfig;
