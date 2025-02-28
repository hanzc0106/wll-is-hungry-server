import Category, { CategoryAttributes } from '@/models/Category'
import { Op } from 'sequelize'
import type { PaginationReq } from '@/type/global'

// 获取全部类别
export async function getCategoriesByNames(
  categoryNames: string[] = []
): Promise<CategoryAttributes[]> {
  const res = await Category.findAll({
    where: {
      name: {
        [Op.in]: categoryNames
      }
    }
  })

  return res.map((item) => item.dataValues)
}

// 获取素菜id
export async function getVegeCategoryIds(): Promise<number[]> {
  const rows = await getCategoriesByNames(['素菜'])
  return rows.map((category) => category.id)
}

// 获取荤菜id
export async function getMeatCategoryIds(): Promise<number[]> {
  const rows = await getCategoriesByNames(['荤菜'])
  return rows.map((category) => category.id)
}
