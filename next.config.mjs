/** @type {import('next').NextConfig} */
const isProd = process.env.GITHUB_PAGES === 'true';
const repo = process.env.NEXT_PUBLIC_REPO_NAME; // proje-sitesi için repo adı, user-sitesi için boş

export default {
  output: 'export',              // GitHub Pages için statik export
  trailingSlash: true,
  images: { unoptimized: true }, // Pages'de image optimizer yok
  basePath: isProd && repo ? `/${repo}` : undefined,
  assetPrefix: isProd && repo ? `/${repo}/` : undefined,
};
