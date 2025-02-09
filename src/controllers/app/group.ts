import { Context, Next } from 'koa'
import { getRequestType } from '../../type/global'
import { getGroupInfoService, getGroupListService } from '../../services/group'
import { CODE } from '../../config/code'

// 获取群聊列表
export const groupListApi = async (ctx: Context, next: Next) => {
  let { offset = 0, limit = 10, keyword } = (ctx.request.query || {}) as getRequestType

  offset = Number(offset)
  limit = Number(limit)

  // 获取群聊列表
  const groupInfo = await getGroupListService({ offset, limit, keyword })

  ctx.body = { count: groupInfo.count, list: groupInfo.rows }

  return next()
}

// 获取群聊详情
export const groupInfoApi = async (ctx: Context, next: Next) => {
  const { id } = (ctx.request.query || {}) as getRequestType
  if (!id) {
    throw CODE.missingParameters
  }

  // 获取群聊详情
  const groupInfo = await getGroupInfoService({ id: Number(id) })
  if (!groupInfo) {
    throw '群聊不存在'
  }

  ctx.body = groupInfo

  return next()
}
