import { getRecipeListByIds } from './../services/recipe'
import { getAllRecipes } from './../controllers/app/recipe'
import controllers from '../controllers'
import koaRouter from 'koa-router'

const router = new koaRouter()

const version = 'v1'

const service = {
  global: '',
  recipe: '/recipe'
}

// 获取全部菜品
router.get(`/api/${version}${service.recipe}/all`, controllers.app_recipe.getAllRecipes)

// 根据id列表获取菜谱
router.post(`/api/${version}${service.recipe}/list`, controllers.app_recipe.getRecipesByIds)

export default router
