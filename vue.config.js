const path = require('path')
const vConsolePlugin = require('vconsole-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true, // 生产打包去掉map文件
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: [
                    new CompressionPlugin({ // 开启gzip压缩
                        asset: '[path].gz[query]',
                        algorithm: 'gzip',
                        test: /\.js$|\.html$|\.css/,
                        threshold: 10240,
                        minRatio: 0.8
                    }),
                    new vConsolePlugin({
                        filter: [],  // 需要过滤的入口文件
                        enable: true
                    })
                ]
            }
        }

    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
        config.plugins.delete("prefetch")
        config.plugins.delete('preload')
        config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
                inline: /runtime\..*\.js$/
            }])
            .end()    
        config
            .optimization.splitChunks({
                chunks: "all",
                cacheGroups: {
                    libs: {
                        name: "chunk-libs",
                        test: /[\\/]node_modules[\\/]/,
                        priority: 10,
                        chunks: "initial" // 只打包初始时依赖的第三方
                    },
                    commons: {
                        name: "chunk-commons",
                        test: resolve("src/components"), // 可自定义拓展你的规则
                        minChunks: 3, // 最小共用次数
                        priority: 5,
                        reuseExistingChunk: true
                    }
                }
            })

        config
            .plugin('webpack-bundle-analyzer')
            .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    blue: '#3eaf7c',
                    'text-color': '#111'
                }
            }
        }
    }
}