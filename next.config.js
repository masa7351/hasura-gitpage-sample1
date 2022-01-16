const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // see: https://maku.blog/p/au8ju6g/
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
}

module.exports = nextConfig
