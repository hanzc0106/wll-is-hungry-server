import { Category } from '@/models'
import { Op } from 'sequelize'
import type { PaginationReq } from '@/type/global'

// 获取素菜id
export async function getVegeCategoryIds(): Promise<number[]> {
  const rows = await Category.findAll({
    attributes: ['id'],
    where: {
      name: {
        [Op.in]: ['素菜']
      }
    }
  })

  return rows.map((category) => category.toJSON().id)
}

// 获取荤菜id
export async function getMeatCategoryIds(): Promise<number[]> {
  const rows = await Category.findAll({
    attributes: ['id'],
    where: {
      name: {
        [Op.in]: ['荤菜']
      }
    }
  })

  return rows.map((category) => category.toJSON().id)
}
