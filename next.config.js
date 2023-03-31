module.exports = {
  compiler: {
    styledComponents: { ssr: true, displayName: true },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ikwueto.s3.amazonaws.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};
