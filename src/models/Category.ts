import { Model, DataTypes, Optional } from 'sequelize'
import sequelize from '@/utils/pool'
import { timeStamp } from 'console'

export interface CategoryAttributes {
  id: number
  name: string
}

// 定义创建时的可选属性
export interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'id'> {}

// 定义模型类
class Category extends Model<CategoryAttributes, CategoryCreationAttributes> {}

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
    freezeTableName: true,
    timestamps: false
  }
)

export default Category
