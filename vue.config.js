module.exports = {
  // proxy config
  devServer: {
    proxy: {
      // 指向/ajax的请求转发到target服务器
      '/ajax': {
        // App.vue axios.get('maoyan API')
        target: 'http://m.maoyan.com',
        changeOrigin: true
      }
    }
  }
}
