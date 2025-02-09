import sequelize from '../utils/pool'
import { Model, DataTypes } from 'sequelize'

class Group extends Model {
  declare id: number
  declare name: string
  declare description: string
  declare qrcode: string
  declare avatar: string
  declare office?: number
}

Group.init(
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
      comment: '群聊名称'
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '群聊描述'
    },
    qrcode: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '群聊二维码'
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '群聊头像'
    },
    office: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      comment: '是否为官方群 1是 2否'
    }
  },
  {
    sequelize,
    modelName: 'group',
    freezeTableName: true
  }
)

export default Group
