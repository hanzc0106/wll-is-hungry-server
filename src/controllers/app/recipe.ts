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
  console.log('getVegeRecipes')
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
  const ids = ctx.request.body.ids
  if (!Array.isArray(ids)) {
    throw new Error('Invalid request body: ids should be an array')
  }

  const recipes = await getRecipeListByIds(ids)
  ctx.body = recipes

  return next()
}
