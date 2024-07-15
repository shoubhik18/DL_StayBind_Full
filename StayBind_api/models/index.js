

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.js')[env];
// const db = {};
// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }
// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file));
//     if (typeof model === 'function') {
//       const modelInstance = model(sequelize, Sequelize.DataTypes);
//       db[modelInstance.name] = modelInstance;
//     }
//   });
// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
// module.exports = db;


// models/index.js

// const Sequelize = require('sequelize');
// const config = require('../config/config.js'); // Correct import
// const sequelize = new Sequelize(
//   config.development.database,
//   config.development.username,
//   config.development.password,
//   {
//     host: config.development.host,
//     port: config.development.port,
//     dialect: 'postgres',
//     dialectOptions: config.development.dialectOptions
//   }
// );

// const User = require('./user')(sequelize);
// const Lead = require('./lead')(sequelize);

// module.exports = { sequelize, User, Lead };




// const Sequelize = require('sequelize');
// const config = require('../config/config.js'); // Adjust path as necessary
// const sequelize = new Sequelize(
//   config.development.database,
//   config.development.username,
//   config.development.password,
//   {
//     host: config.development.host,
//     port: config.development.port,
//     dialect: 'postgres',
//     dialectOptions: config.development.dialectOptions
//   }
// );

// const User = require('./user')(sequelize);
// const Lead = require('./lead')(sequelize); // Ensure Lead model is correctly imported

// module.exports = { sequelize, User, Lead };


const Sequelize = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    port: config.development.port,
    dialect: 'postgres',
    dialectOptions: config.development.dialectOptions
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require('./user')(sequelize);
db.Lead = require('./lead')(sequelize);

module.exports = db;
