'use strict';

import { Sequelize, Model, DataTypes, UUIDV4 } from "sequelize";

interface ActorAttributes {
  id: string;
  name: string;
}

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  class Actor extends Model<ActorAttributes> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      this.belongsToMany(models.Movie, {
        through: 'ActorMovies',
        foreignKey: 'actorId',
        as: 'movies'
      })
    }
  }
  Actor.init({
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
    modelName: 'Actor',
  });
  return Actor;
};