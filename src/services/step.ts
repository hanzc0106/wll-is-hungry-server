import { Step } from '@/models'
import { Op } from 'sequelize'

export async function getStepsByRecipeId(recipeId: number): Promise<Step[]> {
  const steps = await Step.findAll({
    where: {
      recipe_id: {
        [Op.eq]: recipeId
      }
    },
    order: [['step_number', 'ASC']]
  })

  return steps.map((step) => step.toJSON())
}
