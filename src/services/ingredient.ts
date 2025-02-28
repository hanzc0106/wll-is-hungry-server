import Ingredient, { IngredientAttributes } from '@/models/Ingredient'
import { Op } from 'sequelize'

export async function getIngredientsByRecipeId(recipeId: number): Promise<IngredientAttributes[]> {
  const ingredients = await Ingredient.findAll({
    where: {
      recipe_id: {
        [Op.eq]: recipeId
      }
    }
  })
  return ingredients.map((ingredient) => ingredient.dataValues)
}
