/** @type {import('next').NextConfig} */
const isProd = process.env.GITHUB_PAGES === 'true';
const repo = process.env.NEXT_PUBLIC_REPO_NAME; // e.g. "cemaksoy.github.io" or project repo name

export default {
  output: 'export',              // enables `next export` for static HTML (GitHub Pages friendly)
  trailingSlash: true,
  images: { unoptimized: true }, // no Image Optimization on static hosting
  basePath: isProd && repo ? `/${repo}` : undefined,
  assetPrefix: isProd && repo ? `/${repo}/` : undefined,
  // If using <Image>, disable or switch to <img> to avoid remote patterns when exporting.
};
