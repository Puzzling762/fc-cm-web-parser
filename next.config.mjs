/** @type {import('next').NextConfig} */

// Use basePath only in production (GitHub Pages)
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  // output: "export", // Enables static export for GitHub Pages
  basePath: isProduction ? "/fc-cm-web-parser" : "",
  assetPrefix: isProduction ? "/fc-cm-web-parser/" : "",
  images: {
    unoptimized: true, // Disable image optimization since it's not supported on GitHub Pages
  },
};

export default nextConfig;