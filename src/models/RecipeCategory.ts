import { Model, DataTypes, Optional } from 'sequelize'
import sequelize from '@/utils/pool'
import Recipe from './Recipe'
import Category from './Category'

class RecipeCategory extends Model {
  declare recipe_id: number
  declare category_id: number
}

RecipeCategory.init(
  {
    recipe_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Recipe',
        key: 'id'
      },
      // 设置为复合主键的一部分
      primaryKey: true
    },
    category_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Category',
        key: 'id'
      },
      // 设置为复合主键的一部分
      primaryKey: true
    }
  },
  {
    sequelize,
    modelName: 'recipe_categories',
    tableName: 'recipe_categories',
    timestamps: false,
    underscored: true
  }
)

export default RecipeCategory
