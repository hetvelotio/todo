'use strict';
import {
  DataTypes,
  Model,
  Sequelize,
  UUIDV4
} from 'sequelize';

interface UserAttributes {
  id: string;
  name: string;
}

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  class User extends Model<UserAttributes> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      this.hasMany(models.Todo, {
        foreignKey: 'userId',
        as: 'todos'
      });
    }
  }
  User.init({
    id: {
      type: dataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};