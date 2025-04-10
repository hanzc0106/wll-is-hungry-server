import { RecipeCategory } from '@/models'
import { Op } from 'sequelize'

// 根据category_id 列表查询
export async function getDistinctRecipeIdsByCategoryIds(categoryIds: number[]): Promise<number[]> {
  const res = await RecipeCategory.findAll({
    attributes: ['recipe_id'],
    where: {
      category_id: {
        [Op.in]: categoryIds
      }
    },
    group: ['recipe_id']
  })
  return res.map((item) => item.toJSON().recipe_id)
}

// 根据recipe_id 列表查询
export async function getDistinctCategoryIdsByRecipeIds(recipeIds: number[]): Promise<number[]> {
  const res = await RecipeCategory.findAll({
    attributes: ['category_id'],
    where: {
      recipe_id: {
        [Op.in]: recipeIds
      }
    },
    group: ['category_id']
  })
  return res.map((item) => item.toJSON().category_id)
}
