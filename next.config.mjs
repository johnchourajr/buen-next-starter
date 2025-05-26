/** @type {import('next').NextConfig} */
const nextConfig = {};
nextConfig.redirects = async () => {
  return [
    {
      source: "/sandbox",
      destination: "/canvas",
      permanent: true,
    },
  ];
};

export default nextConfig;
