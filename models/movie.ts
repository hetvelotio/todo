'use strict';

import { DataTypes, Model, Sequelize, UUIDV4 } from "sequelize";

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {

  interface MovieAttribute {
    id: string;
    title: string;
  }

  class Movie extends Model<MovieAttribute> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      this.belongsToMany(models.Actor, {
        through: 'ActorMovies',
        foreignKey: 'movieId',
        as: 'actors'
      })
    }
  }
  Movie.init({
    id: {
      type: dataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: dataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};