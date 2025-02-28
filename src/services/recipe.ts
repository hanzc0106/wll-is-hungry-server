import Recipe, { RecipeAttributes } from '@/models/Recipe'
import { Op } from 'sequelize'
import { getIngredientsByRecipeId } from './ingredient'
import { getStepsByRecipeId } from './step'
import Ingredient, { IngredientAttributes } from '@/models/Ingredient'
import { getMeatCategoryIds, getVegeCategoryIds } from './category'
import { getDistinctRecipeIdsByCategoryIds } from './recipeCategory'
import { StepAttributes } from '@/models/Step'

// 获取全部Recipe
export async function getAllRecipeList(): Promise<RecipeAttributes[]> {
  const recipes = await Recipe.findAll()
  return recipes.map((recipe) => recipe.dataValues)
}

// 获取全部素菜
export async function getAllVegeRecipes(): Promise<RecipeAttributes[]> {
  try {
    const vegeCategoryIds = await getVegeCategoryIds()
    const recipeIds = await getDistinctRecipeIdsByCategoryIds(vegeCategoryIds)
    const recipes = await getRecipeListByIds(recipeIds)
    return recipes
  } catch (e) {
    console.log(e)
    throw e
  }
}

// 获取全部荤菜
export async function getAllMeatRecipes(): Promise<RecipeAttributes[]> {
  const meatCategoryIds = await getMeatCategoryIds()
  const recipeIds = await getDistinctRecipeIdsByCategoryIds(meatCategoryIds)
  const recipes = await getRecipeListByIds(recipeIds)
  return recipes
}

// 根据id列表获取Recipes
export async function getRecipeListByIds(ids: number[]): Promise<RecipeAttributes[]> {
  const recipes = await Recipe.findAll({
    where: {
      id: {
        [Op.in]: ids
      }
    }
  })
  for (const recipe of recipes) {
    const ingredients = await getIngredientsByRecipeId(recipe.dataValues.id)
    const steps = await getStepsByRecipeId(recipe.dataValues.id)

    recipe.setDataValue('ingredients', ingredients)
    recipe.setDataValue('steps', steps)
  }
  return recipes.map((recipe) => recipe.dataValues)
}
