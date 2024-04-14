/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  // reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
