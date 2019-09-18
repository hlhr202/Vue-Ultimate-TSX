module.exports = {
  lintOnSave: true,
  chainWebpack:(config)=>{
    config.plugins.delete('fork-ts-checker') // 禁用fork-ts-checker，去掉终端的 warning，嫌麻烦的同学可以不删掉
  }
}
