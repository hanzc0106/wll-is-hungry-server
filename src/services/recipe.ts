import { Op } from 'sequelize'
import { getIngredientsByRecipeId } from './ingredient'
import { getStepsByRecipeId } from './step'
import { getMeatCategoryIds, getVegeCategoryIds } from './category'
import { getDistinctRecipeIdsByCategoryIds } from './recipeCategory'
import { Recipe } from '@/models'

// 获取全部Recipe
export async function getAllRecipeList(): Promise<Recipe[]> {
  const recipes = await Recipe.findAll()
  return recipes.map((recipe) => recipe.toJSON())
}

// 获取全部素菜
export async function getAllVegeRecipes(): Promise<Recipe[]> {
  const vegeCategoryIds = await getVegeCategoryIds()
  const recipeIds = await getDistinctRecipeIdsByCategoryIds(vegeCategoryIds)
  const recipes = await getRecipeListByIds(recipeIds)
  return recipes
}

// 获取全部荤菜
export async function getAllMeatRecipes(): Promise<Recipe[]> {
  const meatCategoryIds = await getMeatCategoryIds()
  const recipeIds = await getDistinctRecipeIdsByCategoryIds(meatCategoryIds)
  const recipes = await getRecipeListByIds(recipeIds)
  return recipes
}

// 根据id列表获取Recipes
export async function getRecipeListByIds(ids: number[]): Promise<Recipe[]> {
  const recipes = await Recipe.findAll({
    where: {
      id: {
        [Op.in]: ids
      }
    },
    include: [
      { association: 'ingredients' },
      { association: 'steps' },
      { association: 'categories' },
      { association: 'tags' }
    ]
  })
  return recipes.map((recipe) => recipe.toJSON())
}
