import sequelize from '@/utils/pool'
import { Model, DataTypes, Optional } from 'sequelize'

// 定义模型的属性
export interface StepAttributes {
  id: number
  recipe_id: number
  step_number: number
  description: string
}

// 定义创建时可选的属性
export interface StepCreationAttributes extends Optional<StepAttributes, 'id'> {}

// 定义模型类
class Step extends Model<StepAttributes, StepCreationAttributes> {
  // 定义关联
  public static associate(models: any) {
    Step.belongsTo(models.Recipe, {
      foreignKey: 'recipe_id',
      as: 'recipe',
      onDelete: 'CASCADE'
    })
  }
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
    tableName: 'steps',
    timestamps: false // 如果不希望自动添加 createdAt 和 updatedAt 字段
  }
)

export default Step
