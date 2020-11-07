/**
 * User model
 */
'use strict';

const { Model } = require('sequelize');
import bcrypt from 'bcrypt';

const PROTECTED_ATTRIBUTES = ['password', 'updatedAt'];

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }

    toJSON () {
      let attributes = Object.assign({}, this.get())
      for (let a of PROTECTED_ATTRIBUTES) {
        delete attributes[a]
      }
      return attributes
    }

    validPassword (password) {
      return bcrypt.compareSync(password, this.password);
    }
  };

  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};