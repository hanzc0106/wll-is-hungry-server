import { Model, DataTypes, Optional } from 'sequelize'
import sequelize from '@/utils/pool'

export interface RecipeTagAttributes {
  recipe_id: number
  tag_id: number
}

export interface RecipeTagCreationAttributes extends RecipeTagAttributes {}

class RecipeTag extends Model<RecipeTagAttributes, RecipeTagCreationAttributes> {
  public static associate(models: any) {
    RecipeTag.belongsTo(models.Recipe, {
      foreignKey: 'recipe_id',
      as: 'recipe',
      onDelete: 'CASCADE'
    });
    RecipeTag.belongsTo(models.Tag, {
      foreignKey: 'tag_id',
      as: 'tag',
      onDelete: 'CASCADE'
    });
  }
}

RecipeTag.init(
  {
    recipe_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Recipe',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    tableName: 'recipe_tags',
    freezeTableName: true,
    timestamps: false
  }
)

export default RecipeTag
