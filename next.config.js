/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: [
      'i.ytimg.com',
      'images.unsplash.com',
      'lh3.googleusercontent.com',
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  transpilePackages: ['three'],
}
