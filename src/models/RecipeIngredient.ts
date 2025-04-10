import { Model, DataTypes, Optional } from 'sequelize'
import sequelize from '@/utils/pool'
import Ingredient from './Ingredient'
import Recipe from './Recipe'

class RecipeIngredient extends Model {
  declare recipe_id: number
  declare ingredient_id: number
  declare quantity: string
  declare is_required: boolean
}

// 初始化模型
RecipeIngredient.init(
  {
    recipe_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      comment: '外键，关联菜谱ID',
      references: {
        model: 'recipes',
        key: 'id'
      },
      onDelete: 'CASCADE',
      primaryKey: true
    },
    ingredient_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      comment: '外键，关联原料ID',
      references: {
        model: 'ingredients',
        key: 'id'
      },
      onDelete: 'CASCADE',
      primaryKey: true
    },
    quantity: {
      type: DataTypes.STRING,
      comment: '用量（如“三两”、“半勺”）'
    },
    is_required: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      comment: '是否必需（True/False）'
    }
  },
  {
    sequelize,
    modelName: 'recipe_ingredients',
    tableName: 'recipe_ingredients',
    timestamps: false,
    underscored: true
  }
)

export default RecipeIngredient
