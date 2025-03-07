import Koa from 'koa'
import { logger } from '@/log/log'
import { CODE } from '@/config/code'
import { Context } from 'koa'

// 这个middleware用于将ctx.result中的内容最终回传给客户端
export const responseHandler = (ctx: Context) => {
  if (ctx.body !== undefined) {
    ctx.type = 'json'
    // 当需要返回前端空数据；也就是啥内容也没有的时候；接口层面直接用ctx.body=null
    if (ctx.body === null) {
      ctx.body = null
    } else {
      ctx.body = {
        code: CODE.success.code,
        data: ctx.body,
        message: CODE.success.message
      }
    }
  }
}

// 这个middleware处理在其它middleware中出现的异常,我们在next()后面进行异常捕获，出现异常直接进入这个中间件进行处理
export const errorHandler = (ctx: Koa.Context, next: Koa.Next) => {
  return next().catch((err: { code: any; message: any }) => {
    if (typeof err === 'object') {
      ctx.body = {
        code: err.code,
        data: null,
        message: err.message
      }
    } else {
      ctx.body = {
        code: -1,
        data: null,
        message: err
      }
    }

    logger.error(err)

    // 保证返回状态是 200
    ctx.status = 200

    return Promise.resolve()
  })
}
