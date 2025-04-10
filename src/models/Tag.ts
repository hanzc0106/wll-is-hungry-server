import { Model, DataTypes, Optional } from 'sequelize'
import sequelize from '@/utils/pool'
import Recipe from './Recipe'
import RecipeTag from './RecipeTag'

class Tag extends Model {
  declare id: number
  declare name: string
}
// 初始化模型
Tag.init(
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
      comment: '标签名称'
    }
  },
  {
    sequelize,
    modelName: 'tags',
    tableName: 'tags',
    timestamps: false,
    underscored: true // 使用下划线命名法
  }
)

export default Tag
