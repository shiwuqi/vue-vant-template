const path = require('path')
const vConsolePlugin = require('vconsole-webpack-plugin');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
    configureWebpack: {
        plugins:[
            new vConsolePlugin({
                filter: [],  // 需要过滤的入口文件
                enable: true // 发布代码前记得改回 false
            })
        ],
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
    }
}