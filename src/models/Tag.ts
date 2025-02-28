import { Model, DataTypes, Optional } from 'sequelize'
import sequelize from '@/utils/pool'

export interface TagAttributes {
  id: number
  name: string
}

// 定义创建时的可选属性
export interface TagCreationAttributes extends Optional<TagAttributes, 'id'> {}

// 定义模型类
class Tag extends Model<TagAttributes, TagCreationAttributes> {}

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
    freezeTableName: true,
    underscored: true // 使用下划线命名法
  }
)

export default Tag
