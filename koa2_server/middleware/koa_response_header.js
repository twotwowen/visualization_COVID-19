//设置响应头中间件
module.exports = async (ctx,next) => {
  //获取mime类型
  const contentType = 'application/json; charset=utf-8'
  ctx.set('Content-Type',contentType)
  // ctx.response.body = '{"success": true}'
  //允许跨域设置
  ctx.set('Access-Control-Allow-Origin',"*")
  ctx.set('Access-Control-Allow-Methods','OPTIONS,GET,PUT,POST,DELETE')
  await next()
}