export default {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    },
    optimizeDeps:{
        allowNodeBuiltins: []
    }
  }