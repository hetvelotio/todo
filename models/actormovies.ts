'use strict';

import { DataTypes, Model, Sequelize } from "sequelize";



interface ActorMoviesAttributes {
  actorId: string;
  movieId: string;
  role: string;
}

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  class ActorMovies extends Model<ActorMoviesAttributes> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  ActorMovies.init({
    actorId: {
      type: dataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      onDelete: 'CASCADE',
      references: {
        model: 'Actors',
        key: 'id'
      }
    },
    movieId: {
      type: dataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      onDelete: 'CASCADE',
      references: {
        model: 'Movies',
        key: 'id'
      }
    },
    role: {
      type: dataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ActorMovies',
  });
  return ActorMovies;
};