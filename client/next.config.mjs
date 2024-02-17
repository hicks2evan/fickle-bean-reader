/** @type {import('next').NextConfig} */

import dotenv from 'dotenv';
dotenv.config({ path: `./env/${process.env.NODE_ENV}.env` });

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ficklebean.s3.us-west-1.amazonaws.com',
            port: '',
            pathname: '/*.jpg',
          },
        ],
      },
};

export default nextConfig;
