module.exports = {
  lintOnSave: false,//彻底关闭eslint语法检查 开发阶段一般全部关闭的
  
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.98.123.211',
        //pathRewrite:{"^/api":""}

      }
    }
  }
}