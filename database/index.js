/**
 * Mysql connect
 */
 
import Sequelize from 'sequelize';
import config from './config/config.json';
import fs from 'fs';
import path from 'path';

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env].database, config[env].username, config[env].password, {
  host: config[env].host,
  dialect: config[env].dialect,
  operatorsAliases: false,
  pool: {
    max: config[env].pool.max,
    min: config[env].pool.min,
    acquire: config[env].pool.acquire,
    idle: config[env].pool.idle
  }
});

const db = {};
const basename = path.basename(module.filename);

// Add models

fs
.readdirSync(__dirname + '/../server/models')
.filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
.forEach(file => {
    const model = require(path.join(__dirname + '/../server/models', file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model;
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Falta agregar los modelos aqui

export default db;