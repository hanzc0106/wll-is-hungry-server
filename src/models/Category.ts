import { Recipe, RecipeCategory } from '@/models'
import { Model, DataTypes, Optional } from 'sequelize'
import sequelize from '@/utils/pool'

class Category extends Model {
  declare id: number
  declare name: string
}

// 初始化模型
Category.init(
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
      comment: '类别名称'
    }
  },
  {
    sequelize,
    modelName: 'categories',
    tableName: 'categories',
    timestamps: false,
    underscored: true
  }
)

export default Category
