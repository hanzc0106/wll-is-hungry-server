import Category from './Category'
import Ingredient from './Ingredient'
import Recipe from './Recipe'
import RecipeCategory from './RecipeCategory'
import RecipeIngredient from './RecipeIngredient'
import RecipeTag from './RecipeTag'
import Step from './Step'
import Tag from './Tag'

Category.belongsToMany(Recipe, {
  through: RecipeCategory,
  foreignKey: 'category_id',
  otherKey: 'recipe_id',
  as: 'recipes',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

Ingredient.belongsToMany(Recipe, {
  through: RecipeIngredient,
  foreignKey: 'ingredient_id',
  otherKey: 'recipe_id',
  as: 'recipes',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

Recipe.hasMany(Step)
Recipe.belongsToMany(Ingredient, {
  through: RecipeIngredient,
  foreignKey: 'recipe_id',
  otherKey: 'ingredient_id',
  as: 'ingredients',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})
Recipe.belongsToMany(Category, {
  through: RecipeCategory,
  foreignKey: 'recipe_id',
  otherKey: 'category_id',
  as: 'categories',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})
Recipe.belongsToMany(Tag, {
  through: RecipeTag,
  foreignKey: 'recipe_id',
  otherKey: 'tag_id',
  as: 'tags',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

Step.belongsTo(Recipe, {
  foreignKey: 'recipe_id',
  as: 'recipe',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

Tag.belongsToMany(Recipe, {
  through: RecipeTag,
  foreignKey: 'tag_id',
  otherKey: 'recipe_id',
  as: 'recipes',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})
