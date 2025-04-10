import sequelize from '@/utils/pool'
import { Model, DataTypes, Optional } from 'sequelize'
import Recipe from './Recipe'

class Step extends Model {
  declare id: number
  declare recipe_id: number
  declare step_number: number
  declare description: string
}

// 初始化模型
Step.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: '步骤ID，主键，自增'
    },
    recipe_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      comment: '外键，关联菜谱ID',
      references: {
        model: 'recipes',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    step_number: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: '步骤序号'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: '步骤描述'
    }
  },
  {
    sequelize,
    modelName: 'steps',
    tableName: 'steps',
    timestamps: false,
    underscored: true
  }
)

export default Step
