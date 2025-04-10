import { Ingredient } from '@/models'
import { Op } from 'sequelize'

export async function getIngredientsByRecipeId(recipeId: number): Promise<Ingredient[]> {
  const ingredients = await Ingredient.findAll({
    where: {
      recipe_id: {
        [Op.eq]: recipeId
      }
    }
  })
  return ingredients.map((ingredient) => ingredient.toJSON())
}
