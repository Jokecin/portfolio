import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',        
  images: { unoptimized: true },
};
export default nextConfig;
