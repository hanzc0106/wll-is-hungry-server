import { Context, Next } from 'koa'
import { getAllRecipeList, getRecipeListByIds } from '../../services/recipe'

export const getAllRecipes = async (ctx: Context, next: Next) => {
  const allRecipes = await getAllRecipeList()
  ctx.body = allRecipes
  return next()
}

export const getRecipesByIds = async (ctx: Context, next: Next) => {
  const ids = ctx.request.body.ids
  if (!Array.isArray(ids)) {
    throw new Error('Invalid request body: ids should be an array')
  }

  const recipes = await getRecipeListByIds(ids)
  ctx.body = recipes

  return next()
}
