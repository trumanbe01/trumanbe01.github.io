/** @type {import('next').NextConfig}*/
const nextConfig = {
  /**
   * Fixing Next.js config for Github Pages
   * https://github.com/gregrickaby/nextjs-github-pages
   */
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
