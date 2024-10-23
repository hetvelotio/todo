'use strict';
import {
  DataTypes,
  Model,
  Sequelize,
  UUIDV4
} from 'sequelize';

export enum Status {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

interface TodoAttributes {
  id: string;
  desc: string;
  status: Status;
  userId: string;
}

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  class Todo extends Model<TodoAttributes> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
    }
  }
  Todo.init({
    id: {
      type: dataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    desc: dataTypes.STRING,
    status: {
      type: dataTypes.ENUM(...Object.values(Status))
    },
    userId: {
      type: dataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: 'CASCADE',
    }
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};