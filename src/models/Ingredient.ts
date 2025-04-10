import { Model, DataTypes, Optional } from 'sequelize'
import sequelize from '@/utils/pool'
import { RecipeIngredient, Recipe } from '@/models'

class Ingredient extends Model {
  declare id: number
  declare name: string
  declare type: 'ingredient' | 'seasoning'
}

// 初始化模型
Ingredient.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: '原料ID，主键，自增'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '原料或调料名称'
    },
    type: {
      type: DataTypes.ENUM('ingredient', 'seasoning'),
      allowNull: false,
      comment: '类型：食材或调料'
    }
  },
  {
    sequelize,
    modelName: 'ingredients',
    tableName: 'ingredients',
    timestamps: false,
    underscored: true
  }
)

export default Ingredient
