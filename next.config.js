let basePath = ''

if (process.env.NODE_ENV === 'production') {
  basePath = '/your base path'
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
  basePath: basePath,
  assetPrefix: basePath,
};
module.exports = nextConfig
