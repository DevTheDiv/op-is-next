/** @type {import('next').NextConfig} */


const nextConfig = {
    reactStrictMode: true,
    distDir: 'build',
    // async rewrites() {
    //     return [
    //         {
    //             source: '/api/:path*',
    //             destination: 'http://0.0.0.0:3080/api/:path*',
    //         },
    //     ]
    // },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            }
        ]
    },
}

module.exports = nextConfig