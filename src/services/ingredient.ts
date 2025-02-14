import Ingredient from '../models/Ingredient'
import { Op } from 'sequelize'

export const getIngredientsByRecipeId = async (recipeId: number) => {
  const ingredients = await Ingredient.findAll({
    where: {
      recipe_id: {
        [Op.eq]: recipeId
      }
    }
  })
  return ingredients.map((ingredient) => ingredient.dataValues)
}
