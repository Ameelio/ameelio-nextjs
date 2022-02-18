module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["play-lh.googleusercontent.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.ameelio.org/api/v1/:path*",
      },
    ];
  },
};
