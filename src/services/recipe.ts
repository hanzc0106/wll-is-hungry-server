import Recipe from '../models/Recipe'
import { Op } from 'sequelize'
import { getIngredientsByRecipeId } from './ingredient'
import { getStepsByRecipeId } from './step'
import Ingredient from '../models/Ingredient'

// 获取全部Recipe
export const getAllRecipeList = async () => {
  try {
    const recipes = await Recipe.findAll()
    return recipes.map((recipe) => recipe.dataValues)
  } catch (error) {
    console.error('Error fetching all recipes:', error)
    throw error
  }
}

// 根据id列表获取Recipes
export const getRecipeListByIds = async (ids: number[]) => {
  try {
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
    return recipes
  } catch (error) {
    console.error('Error fetching recipes by IDs:', error)
    throw error
  }
}
