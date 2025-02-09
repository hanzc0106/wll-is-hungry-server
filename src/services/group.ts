import Group from '../models/group'
import { Op } from 'sequelize'

// 获取群聊列表
export const getGroupListService = ({
  offset,
  limit,
  keyword
}: {
  offset: number
  limit: number
  keyword: string
}) => {
  return Group.findAndCountAll({
    order: [['id', 'desc']],
    offset,
    limit,
    where: {
      name: {
        [Op.like]: `%${keyword}%`
      }
    }
  })
}

// 获取群聊详情
export const getGroupInfoService = ({ id }: { id: number }) => {
  return Group.findOne({
    where: {
      id
    }
  })
}
