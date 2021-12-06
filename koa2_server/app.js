//服务器入口文件
//创建koa实例对象
const Koa = require('koa')
const app = new Koa()
//绑定中间件
//绑定第一层中间件
const respDurationMiddleware = require('./middleware/koa_response_duration')
app.use(respDurationMiddleware)
//绑定第二层中间件
const respHaederMiddleware = require('./middleware/koa_response_header')
app.use(respHaederMiddleware)
//绑定第三层中间件
const respDataMiddleware = require('./middleware/koa_response_data')
app.use(respDataMiddleware)
//绑定端口号8888
app.listen(8888)