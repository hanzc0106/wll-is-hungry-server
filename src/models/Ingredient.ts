import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '@/utils/pool';

// 定义模型的属性
export interface IngredientAttributes {
  id: number;
  name: string;
  type: 'ingredient' | 'seasoning';
  is_required: boolean;
}

// 定义创建时可选的属性
export interface IngredientCreationAttributes extends Optional<IngredientAttributes, 'id'> {}

// 定义模型类
class Ingredient extends Model<IngredientAttributes, IngredientCreationAttributes> {
  // 定义关联
  public static associate(models: any) {
    Ingredient.belongsTo(models.Recipe, {
      foreignKey: 'recipe_id',
      as: 'recipe',
      onDelete: 'CASCADE'
    });
    Ingredient.hasMany(models.RecipesIngredient, { foreignKey: 'ingredient_id' });
  }
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
);

export default Ingredient;
