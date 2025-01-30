/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  basePath: "/fc-cm-web-parser", // Set this to your GitHub repo name
  images: {
    unoptimized: true, // Disable image optimization since it's not supported on GitHub Pages
  },
};

export default nextConfig;
