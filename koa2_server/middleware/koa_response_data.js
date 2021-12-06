//业务逻辑中间件
//获取请求路径，拼接文件路径
//读取该路径对应文件的内容
//设置响应体 ctx.response.body
const path = require('path')
const fileUtils = require('../utils/file_utils')
module.exports = async (ctx,next) => {
  const url =ctx.request.url //  /api/seller  ../data/seller.json
  let filePath = url.replace('/api','') //seller
  filePath = '../data' + filePath + '.json' //../data/seller.json
  filePath = path.join(__dirname, filePath)
  try {
    const ret = await fileUtils.getfileJsonData(filePath)
    ctx.response.body = ret
  } catch (error) {
    const errorMsg = {
      message: '读取文件内容失败，文件资源不存在',
      status:404
    }
    ctx.response.body = JSON.stringify(errorMsg)
  }
 
  console.log(filePath)
  await next()
}