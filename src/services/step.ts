import Step from '../models/Step'
import { Op } from 'sequelize'

export const getStepsByRecipeId = async (recipeId: number) => {
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
