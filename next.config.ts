const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/org-site' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath,
  assetPrefix: basePath,
  images: { unoptimized: true },
};

export default nextConfig;