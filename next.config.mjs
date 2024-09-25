/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatar.vercel.sh',
                port: '',
                pathname: '/**', // Allow all paths from avatar.vercel.sh
            },
        ],
    },
};


export default nextConfig;
