import sequelize from '../utils/pool'
import { Model, DataTypes, Optional } from 'sequelize'

// 定义模型的属性
export interface IngredientAttributes {
  id: number
  recipe_id: number
  NAME: string
  quantity: string
  type: 'ingredient' | 'seasoning'
  is_required: boolean
}

// 定义创建时可选的属性
interface IngredientCreationAttributes extends Optional<IngredientAttributes, 'id'> {}

// 定义模型类
class Ingredient extends Model<IngredientAttributes, IngredientCreationAttributes> {
  // 定义关联
  public static associate(models: any) {
    Ingredient.belongsTo(models.Recipe, {
      foreignKey: 'recipe_id',
      as: 'recipe',
      onDelete: 'CASCADE'
    })
  }
}

// 初始化模型
Ingredient.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: '主键ID'
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
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: '原料或调料名称'
    },
    quantity: {
      type: DataTypes.STRING(100),
      comment: '用量（如“三两”、“半勺”）'
    },
    type: {
      type: DataTypes.ENUM('ingredient', 'seasoning'),
      allowNull: false,
      comment: '类型：食材或调料'
    },
    is_required: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      comment: '是否必需（True/False）'
    }
  },
  {
    sequelize,
    tableName: 'ingredients',
    timestamps: false
  }
)

export default Ingredient
