/** @type {import('next').NextConfig} */

const path = require('path')
const Dotenv = require('dotenv-webpack')
const withImages = require('next-images')

const imagesConfig = {
    images: { disableStaticImages: true }
}

console.log(`[NEXT_CONFIG]: ${process.env.NODE_ENV}`)
console.log(`[NEXT_BUILD_MODE]: ${process.env.BUILD_MODE}`)

const nextConfig = {
    reactStrictMode: true,
    trailingSlash: process.env.BUILD_MODE?.trim() == 'static',
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        })

        config.plugins.push(
            new Dotenv({
                path: path.join(__dirname, `.env.${process.env.NODE_ENV}`),
                systemvars: true
            })
        )

        return config
    }
}

module.exports = withImages({
    ...imagesConfig,
    ...nextConfig
})
