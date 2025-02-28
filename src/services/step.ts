import Step, { StepAttributes } from '@/models/Step'
import { Op } from 'sequelize'

export async function getStepsByRecipeId(recipeId: number): Promise<StepAttributes[]> {
  const steps = await Step.findAll({
    where: {
      recipe_id: {
        [Op.eq]: recipeId
      }
    },
    order: [['step_number', 'ASC']]
  })

  return steps.map((step) => step.dataValues)
}
