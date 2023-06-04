let basePath = process.env.NEXT_PUBLIC_BASE_PATH

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
  basePath: basePath,
  assetPrefix: basePath,
  //publicRuntimeConfig: {
  //  basePath: basePath,
  //},
};
module.exports = nextConfig
