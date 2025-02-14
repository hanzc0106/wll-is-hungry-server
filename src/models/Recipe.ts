// src/models/Recipe.ts
import { Model, DataTypes, Optional } from 'sequelize'
import sequelize from '../utils/pool'
import { StepAttributes } from './Step'
import { IngredientAttributes } from './Ingredient'

// 定义属性类型
interface RecipeAttributes {
  id: number
  name: string
  description?: string
  summary: string
  createdAt: Date
  updatedAt?: Date
  ingredients?: IngredientAttributes[]
  steps?: StepAttributes[]
}

// 定义创建时的可选属性
interface RecipeCreationAttributes
  extends Optional<RecipeAttributes, 'id' | 'description' | 'updatedAt'> {}

// 定义模型类
class Recipe extends Model<RecipeAttributes, RecipeCreationAttributes> {}

// 初始化模型
Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: '主键ID'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '菜谱名称'
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
      comment: '菜谱描述'
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '菜谱总结'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      comment: '创建时间'
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: null,
      comment: '更新时间'
    }
  },
  {
    sequelize,
    modelName: 'recipes',
    freezeTableName: true,
    underscored: true // 使用下划线命名法
  }
)

export default Recipe
