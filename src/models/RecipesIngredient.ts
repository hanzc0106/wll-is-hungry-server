import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '@/utils/pool';

// 定义模型的属性
export interface RecipesIngredientAttributes {
  id: number;
  recipe_id: number;
  ingredient_id: number;
  quantity: string;
}

// 定义创建时可选的属性
export interface RecipesIngredientCreationAttributes extends Optional<RecipesIngredientAttributes, 'id'> {}

// 定义模型类
class RecipesIngredient extends Model<RecipesIngredientAttributes, RecipesIngredientCreationAttributes> {
  // 定义关联
  public static associate(models: any) {
    RecipesIngredient.belongsTo(models.Recipe, { foreignKey: 'recipe_id' });
    RecipesIngredient.belongsTo(models.Ingredient, { foreignKey: 'ingredient_id' });
  }
}

// 初始化模型
RecipesIngredient.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: '关联ID，主键，自增'
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
    ingredient_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      comment: '外键，关联原料ID',
      references: {
        model: 'ingredients',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    quantity: {
      type: DataTypes.STRING,
      comment: '用量（如“三两”、“半勺”）'
    }
  },
  {
    sequelize,
    tableName: 'recipes_ingredients',
    timestamps: false
  }
);

export default RecipesIngredient;