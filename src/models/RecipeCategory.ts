import { Model, DataTypes, Optional } from 'sequelize'
import sequelize from '@/utils/pool'

export interface RecipeCategoryAttributes {
  recipe_id: number
  category_id: number
}

export interface RecipeCategoryCreationAttributes extends RecipeCategoryAttributes {}

class RecipeCategory extends Model<RecipeCategoryAttributes, RecipeCategoryCreationAttributes> {
  public static associate(models: any) {
    RecipeCategory.belongsTo(models.Recipe, { foreignKey: 'recipe_id' })
    RecipeCategory.belongsTo(models.Category, { foreignKey: 'category_id' })
  }
}

RecipeCategory.init(
  {
    recipe_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Recipe',
        key: 'id'
      }
    },
    category_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    tableName: 'recipe_categories',
    freezeTableName: true,
    timestamps: false
  }
)

export default RecipeCategory
