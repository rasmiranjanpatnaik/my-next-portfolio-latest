/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'github-readme-stats.vercel.app',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'skillicons.dev',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'github-readme-streak-stats.herokuapp.com',
          pathname: '/**',
        },
      ],
      dangerouslyAllowSVG: true, // Enable SVG images
    },
  };
  
  export default nextConfig;
  