// src/models/Recipe.ts
import { Model, DataTypes } from 'sequelize'
import sequelize from '@/utils/pool'
import {
  Category,
  Ingredient,
  RecipeCategory,
  RecipeIngredient,
  RecipeTag,
  Step,
  Tag
} from '@/models'

class Recipe extends Model {
  declare id: number
  declare name: string
  declare description: string
  declare summary: string
  declare ingredients: Ingredient[]
  declare steps: Step[]
  declare tags: Tag[]
  declare categories: Category[]
}

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
    tableName: 'recipes',
    timestamps: true,
    underscored: true // 使用下划线命名法
  }
)

export default Recipe
