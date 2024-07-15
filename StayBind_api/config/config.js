// require('dotenv').config();
// module.exports = {
//   development: {
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: 'postgres',
//     dialectOptions: {
//       ssl: {
//         require: true, // This will help you connect to Azure Database with SSL
//         rejectUnauthorized: false // This might be needed if your SSL certificate is self-signed
//       }
//     }
//   },
//   // Add configurations for other environments (test, production) if needed
// };

// config/config.js
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
  // Add configurations for other environments (test, production) if needed
};
