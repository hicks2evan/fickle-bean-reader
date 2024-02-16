/** @type {import('next').NextConfig} */

import dotenv from 'dotenv';
dotenv.config({ path: `./env/${process.env.NODE_ENV}.env` });

const nextConfig = {};

export default nextConfig;
