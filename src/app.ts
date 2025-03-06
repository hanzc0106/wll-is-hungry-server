import Koa from 'koa'
import http from 'http'
import cors from '@koa/cors'
import koaBody from 'koa-body'
import { getIpAddress } from '@/utils/util'
import { loggerMiddleware } from '@/log/log'
import { FIXED_KEY } from '@/config/constant'
import { privateRouter, publicRouter, openRouter } from '@/router'
import { errorHandler, responseHandler } from '@/middleware/response'

// console.log(process.env)

const app = new Koa()

// 配置跨域中间件
app.use(
  cors({
    origin: '*', // 允许所有来源访问，生产环境中应该设置为特定域名
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    credentials: true, // 允许发送cookie
    maxAge: 86400 // 预检请求有效期，单位为秒
  })
)

// log middleware
app.use(loggerMiddleware)

// Error Handler
app.use(errorHandler)

// Global middleware
app.use(koaBody({ multipart: true }))

// Routes
// app.use(publicRouter.routes()).use(publicRouter.allowedMethods()) // 公共路由
// app.use(privateRouter.routes()).use(privateRouter.allowedMethods()) // 权限路由
app.use(openRouter.routes()).use(openRouter.allowedMethods()) // 公开路由

// Response
app.use(responseHandler)

const port = FIXED_KEY.port

const server = http.createServer(app.callback())

server.listen(port, '0.0.0.0')

server.on('error', (err: Error) => {
  console.log(err)
})

server.on('listening', () => {
  const ip = getIpAddress()
  const address = `http://${ip}:${port}`
  const localAddress = `http://localhost:${port}`
  console.log(`\napp started at address:\n\n${localAddress}\n${address}`)
})
