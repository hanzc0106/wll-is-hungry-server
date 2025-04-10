import { Context, Next } from 'koa'
import {
  getAllMeatRecipes,
  getAllRecipeList,
  getAllVegeRecipes,
  getRecipeListByIds
} from '@/services/recipe'

export async function getAllRecipes(ctx: Context, next: Next): Promise<void> {
  const allRecipes = await getAllRecipeList()
  ctx.body = allRecipes
  return next()
}

export async function getVegeRecipes(ctx: Context, next: Next): Promise<void> {
  const vegeRecipes = await getAllVegeRecipes()
  ctx.body = vegeRecipes
  return next()
}

export async function getMeatRecipes(ctx: Context, next: Next): Promise<void> {
  const meatRecipes = await getAllMeatRecipes()
  ctx.body = meatRecipes
  return next()
}

export async function getRecipesByIds(ctx: Context, next: Next): Promise<void> {
  const idQuery = ctx.request.query.id
  if (!idQuery) {
    throw new Error('Invalid request param: id is required')
  }
  const ids = Array.isArray(idQuery)
    ? idQuery.map((id: string) => parseInt(id))
    : [parseInt(idQuery)]

  const recipes = await getRecipeListByIds(ids)
  ctx.body = recipes

  return next()
}
