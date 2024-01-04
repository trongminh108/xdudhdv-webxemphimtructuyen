/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'webserver-l2tp.onrender.com',
                port: '',
                pathname: '/files/**',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '4000',
                pathname: '/files/**',
            },
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com',
                port: '',
                pathname: '/images/**',
            },
        ],
        domains: ['m.media-amazon.com'],
    },
    experimental: {
        appDir: true,
    },
    // reactStrictMode: true,
    // redirects: async () => {
    //     return [
    //         {
    //             source: '/',
    //             destination: '/pages/category',
    //             permanent: true,
    //         },
    //     ];
    // },
};

module.exports = nextConfig;
