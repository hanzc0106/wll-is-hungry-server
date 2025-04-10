import { Model, DataTypes, Optional } from 'sequelize'
import sequelize from '@/utils/pool'
import Recipe from './Recipe'
import Tag from './Tag'

class RecipeTag extends Model {
  declare recipe_id: number
  declare tag_id: number
}

RecipeTag.init(
  {
    recipe_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Recipe',
        key: 'id'
      },
      primaryKey: true
    },
    tag_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Tag',
        key: 'id'
      },
      primaryKey: true
    }
  },
  {
    sequelize,
    modelName: 'recipe_tags',
    tableName: 'recipe_tags',
    timestamps: false,
    underscored: true
  }
)

export default RecipeTag
