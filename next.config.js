/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  theme: {
    extend: {
      padding: {
        '1/2': '50%',
        full: '100%',
      },
    },
  },
  images: {
    domains: ['links.papareact.com', 'dropbox.com'],
  },
}
