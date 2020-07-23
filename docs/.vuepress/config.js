module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: '/sutra/',
    themeConfig: {
        sidebar: 'auto',
        lastUpdated: 'Last Updated',
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@public': path.resolve(__dirname, 'public')
            }
        }
    }
}